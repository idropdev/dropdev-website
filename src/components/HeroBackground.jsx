import { useEffect, useRef, useState } from 'react';
import './HeroBackground.css';

export default function HeroBackground() {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const particlesRef = useRef([]);
    const animationRef = useRef(null);
    const [isLightMode, setIsLightMode] = useState(false);

    // Watch for theme changes
    useEffect(() => {
        const checkTheme = () => {
            setIsLightMode(document.documentElement.getAttribute('data-theme') === 'light');
        };
        checkTheme();

        // Observe theme attribute changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Theme-aware colors
        const bgColor = isLightMode ? '#f8fafc' : '#0a0a0f';
        const bgFade = isLightMode ? 'rgba(248, 250, 252, 0.1)' : 'rgba(10, 10, 15, 0.1)';
        const connectionColor = isLightMode ? 'rgba(2, 132, 199, ' : 'rgba(56, 189, 248, ';

        // Set canvas size
        const setSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        setSize();
        window.addEventListener('resize', setSize);

        // Mouse tracking
        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Particle class
        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5;
                this.baseSize = this.size;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.baseOpacity = this.opacity;
                this.twinkleSpeed = Math.random() * 0.02 + 0.01;
                this.twinkleOffset = Math.random() * Math.PI * 2;
                // Color variation - blue in both modes
                this.hue = isLightMode
                    ? Math.random() * 20 + 190  // 190-210 (blue/cyan for light mode)
                    : Math.random() * 30 + 190; // 190-220 (blue/cyan for dark mode)
                this.saturation = isLightMode
                    ? Math.random() * 20 + 70   // Higher saturation for light mode
                    : Math.random() * 30 + 60;
                this.lightness = isLightMode ? 45 : 75; // Darker particles for light background
            }

            update(time) {
                // Subtle drift movement
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around edges
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;

                // Twinkle effect
                this.opacity = this.baseOpacity + Math.sin(time * this.twinkleSpeed + this.twinkleOffset) * 0.2;

                // Mouse interaction - subtle parallax
                const dx = mouseRef.current.x - width / 2;
                const dy = mouseRef.current.y - height / 2;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
                const parallaxFactor = (this.baseSize / 2) * 0.02;

                this.renderX = this.x + (dx / maxDistance) * distance * parallaxFactor;
                this.renderY = this.y + (dy / maxDistance) * distance * parallaxFactor;
            }

            draw(ctx) {
                ctx.beginPath();
                ctx.arc(this.renderX, this.renderY, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.opacity})`;
                ctx.fill();

                // Glow effect for larger stars
                if (this.size > 1.5) {
                    ctx.beginPath();
                    ctx.arc(this.renderX, this.renderY, this.size * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness - 10}%, ${this.opacity * 0.2})`;
                    ctx.fill();
                }
            }
        }

        // Create particles
        const particleCount = Math.min(200, Math.floor((width * height) / 10000));
        particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

        // Create connection lines between nearby particles
        const drawConnections = () => {
            const particles = particlesRef.current;
            const connectionDistance = 100;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].renderX - particles[j].renderX;
                    const dy = particles[i].renderY - particles[j].renderY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = (1 - distance / connectionDistance) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].renderX, particles[i].renderY);
                        ctx.lineTo(particles[j].renderX, particles[j].renderY);
                        ctx.strokeStyle = connectionColor + opacity + ')';
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation loop
        let startTime = Date.now();
        const animate = () => {
            const time = Date.now() - startTime;

            // Clear with fade effect
            ctx.fillStyle = bgFade;
            ctx.fillRect(0, 0, width, height);

            // Update and draw particles
            particlesRef.current.forEach(particle => {
                particle.update(time);
                particle.draw(ctx);
            });

            // Draw connections
            drawConnections();

            animationRef.current = requestAnimationFrame(animate);
        };

        // Initial fill
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, width, height);

        animate();

        return () => {
            window.removeEventListener('resize', setSize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isLightMode]);

    return (
        <div className="hero-background">
            <canvas ref={canvasRef} className="hero-canvas" />
            <div className="hero-gradient-overlay" />
        </div>
    );
}
