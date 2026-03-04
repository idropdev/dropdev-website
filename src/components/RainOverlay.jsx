import { useEffect, useRef } from 'react';
import './RainOverlay.css';

function randomBetween(a, b) { return a + Math.random() * (b - a); }

// ─── Rain physics ─────────────────────────────────────────────────────────────
function createDrop(w) {
    return {
        x: randomBetween(0, w),
        y: randomBetween(-200, 0),
        len: randomBetween(18, 55),     // streak length
        speed: randomBetween(400, 900), // px/s
        alpha: randomBetween(0.35, 0.9),
        width: randomBetween(0.8, 1.8),
    };
}

export default function RainOverlay({ isActive = true }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const ctx = canvas.getContext('2d');
        const RAIN_COUNT = 220;
        let drops = Array.from({ length: RAIN_COUNT }, () => createDrop(canvas.width));

        // Water level state
        let waterLevel = canvas.height;          // px from top (starts at bottom = height)
        const FILL_RATE = 18;                    // px/s the water rises
        const FILL_DELAY = 2;                    // seconds before water starts accumulating
        const UNDERWATER_DELAY = 10;             // seconds until underwater effect
        let phase = 'rain';                      // 'rain' | 'filling' | 'underwater'
        let elapsed = 0;
        let lastTime = null;
        let underwaterAlpha = 0;

        let raf;
        const animate = (ts) => {
            if (!lastTime) lastTime = ts;
            const dt = Math.min((ts - lastTime) / 1000, 0.05);
            lastTime = ts;
            elapsed += dt;

            const W = canvas.width;
            const H = canvas.height;

            ctx.clearRect(0, 0, W, H);

            // Phase transitions
            if (phase === 'rain' && elapsed > FILL_DELAY) phase = 'filling';
            if (phase === 'filling' && waterLevel <= 0) { phase = 'underwater'; waterLevel = 0; }

            // Water rises
            if (phase === 'filling') {
                waterLevel = Math.max(0, waterLevel - FILL_RATE * dt);
            }

            // ── Draw rain streaks ──────────────────────────────────────────
            if (phase !== 'underwater') {
                drops.forEach((d) => {
                    // Only draw drops above the water surface
                    if (d.y < waterLevel + 10) {
                        const angle = 0.12; // slight lean
                        const ex = d.x + Math.sin(angle) * d.len;
                        const ey = d.y + Math.cos(angle) * d.len;

                        ctx.beginPath();
                        ctx.moveTo(d.x, d.y);
                        ctx.lineTo(ex, ey);
                        ctx.strokeStyle = `rgba(100, 180, 255, ${d.alpha})`;
                        ctx.lineWidth = d.width;
                        ctx.stroke();
                    }

                    // Advance drop
                    d.y += d.speed * dt;
                    d.x += Math.sin(0.12) * d.speed * dt * 0.05;

                    // Splash & reset at water surface (or screen bottom if no water yet)
                    const floor = phase === 'rain' ? H : waterLevel;
                    if (d.y > floor) {
                        Object.assign(d, createDrop(W));
                        d.y = randomBetween(-200, -10);
                    }
                });
            }

            // ── Draw water body ───────────────────────────────────────────
            if (phase === 'filling' || phase === 'underwater') {
                // Animated wave on the surface
                const time = elapsed;
                ctx.beginPath();
                ctx.moveTo(0, waterLevel);
                for (let x = 0; x <= W; x += 4) {
                    const waveY = waterLevel
                        + Math.sin(x * 0.012 + time * 2.5) * 4
                        + Math.sin(x * 0.025 + time * 1.8) * 2.5;
                    ctx.lineTo(x, waveY);
                }
                ctx.lineTo(W, H);
                ctx.lineTo(0, H);
                ctx.closePath();

                // Gradient: semi-transparent blue at surface → deeper blue at bottom
                const grad = ctx.createLinearGradient(0, waterLevel, 0, H);
                grad.addColorStop(0, 'rgba(16, 80, 180, 0.38)');
                grad.addColorStop(0.3, 'rgba(8, 50, 140, 0.55)');
                grad.addColorStop(1, 'rgba(2, 20, 80, 0.72)');
                ctx.fillStyle = grad;
                ctx.fill();

                // Surface shimmer line
                ctx.beginPath();
                for (let x = 0; x <= W; x += 4) {
                    const sy = waterLevel
                        + Math.sin(x * 0.012 + time * 2.5) * 4
                        + Math.sin(x * 0.025 + time * 1.8) * 2.5;
                    if (x === 0) ctx.moveTo(x, sy);
                    else ctx.lineTo(x, sy);
                }
                ctx.strokeStyle = 'rgba(140, 210, 255, 0.45)';
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }

            // ── Underwater overlay ────────────────────────────────────────
            if (phase === 'underwater') {
                underwaterAlpha = Math.min(1, underwaterAlpha + dt * 0.15);

                // Deep blue tint over everything
                ctx.fillStyle = `rgba(0, 20, 80, ${underwaterAlpha * 0.55})`;
                ctx.fillRect(0, 0, W, H);

                // Caustic light beams from top
                const beamCount = 8;
                for (let b = 0; b < beamCount; b++) {
                    const bx = (W / beamCount) * b + W / (beamCount * 2);
                    const bw = randomBetween(30, 80);
                    const grad = ctx.createLinearGradient(bx, 0, bx, H);
                    grad.addColorStop(0, `rgba(80, 180, 255, ${0.06 * underwaterAlpha})`);
                    grad.addColorStop(0.5, `rgba(40, 120, 220, ${0.03 * underwaterAlpha})`);
                    grad.addColorStop(1, 'transparent');
                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    const wobble = Math.sin(elapsed * 0.7 + b) * 12;
                    ctx.moveTo(bx - bw / 2 + wobble, 0);
                    ctx.lineTo(bx + bw / 2 + wobble, 0);
                    ctx.lineTo(bx + bw * 0.3, H);
                    ctx.lineTo(bx - bw * 0.3, H);
                    ctx.fill();
                }

                // Floating bubbles
                const bubbleT = elapsed * 0.5;
                for (let b = 0; b < 18; b++) {
                    const bx = ((b * 137.5) % W);
                    const by = H - ((bubbleT * (30 + b * 7)) % H);
                    const br = 3 + (b % 5) * 2;
                    ctx.beginPath();
                    ctx.arc(bx, by, br, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(150, 220, 255, ${0.3 * underwaterAlpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            raf = requestAnimationFrame(animate);
        };

        raf = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, [isActive]);

    return (
        <div className={`rain-overlay ${isActive ? 'active' : ''}`}>
            <canvas ref={canvasRef} className="rain-canvas" />
        </div>
    );
}
