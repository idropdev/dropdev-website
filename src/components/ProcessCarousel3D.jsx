import { useEffect, useState, useRef } from 'react';
import './ProcessCarousel3D.css';

const processSteps = [
    {
        number: '01',
        title: 'Ideate',
        description: 'Validate opportunities through rigorous market analysis and technical feasibility assessment.',
    },
    {
        number: '02',
        title: 'Build',
        description: 'Design and engineer production-grade products with enterprise-quality architecture.',
    },
    {
        number: '03',
        title: 'Launch',
        description: 'Go-to-market with data-driven strategies and initial customer acquisition.',
    },
    {
        number: '04',
        title: 'Scale',
        description: 'Accelerate growth through operationalized playbooks and continued technical partnership.',
    },
];

export default function ProcessCarousel3D() {
    const [rotation, setRotation] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const animationRef = useRef(null);
    const lastTimeRef = useRef(Date.now());

    useEffect(() => {
        const animate = () => {
            if (!isPaused) {
                const now = Date.now();
                const delta = now - lastTimeRef.current;
                lastTimeRef.current = now;

                // Rotate at a steady pace (360 degrees per 20 seconds) - counter-clockwise
                setRotation(prev => (prev - (delta * 0.018) + 360) % 360);
            } else {
                lastTimeRef.current = Date.now();
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isPaused]);

    const itemCount = processSteps.length;
    const anglePerItem = 360 / itemCount;
    const radius = 280; // Distance from center

    return (
        <div
            className="carousel-3d-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="carousel-3d-scene">
                <div
                    className="carousel-3d-rotator"
                    style={{
                        transform: `rotateY(${rotation}deg)`,
                    }}
                >
                    {processSteps.map((step, index) => {
                        const angle = anglePerItem * index;
                        return (
                            <div
                                key={step.number}
                                className="carousel-3d-item"
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                }}
                            >
                                <div className="carousel-step-card">
                                    <div className="carousel-step-number">{step.number}</div>
                                    <h4 className="carousel-step-title">{step.title}</h4>
                                    <p className="carousel-step-description">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="carousel-3d-hint">
                <span>Hover to pause</span>
            </div>
        </div>
    );
}
