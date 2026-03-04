import { useEffect, useRef } from 'react';
import './DrippingOverlay.css';

// ─── Drip simulation ─────────────────────────────────────────────────────────
// Each drip hangs from the bottom edge of the solid ceiling mass.
// It grows slowly using bezier curves, then releases teardrop drops.

function randomBetween(a, b) {
    return a + Math.random() * (b - a);
}

function createDrips(canvasW) {
    const count = 14;
    const drips = [];
    for (let i = 0; i < count; i++) {
        const baseX = (i / count) * canvasW;
        drips.push({
            x: baseX + randomBetween(-canvasW * 0.01, canvasW * 0.04),
            width: randomBetween(18, 65),         // px, irregular widths
            length: 0,
            targetLength: randomBetween(80, 380),  // how far it drips down
            speed: randomBetween(18, 55),          // px/s growth
            dropTimer: randomBetween(0.5, 3),
            dropInterval: randomBetween(2, 5),
            wobble: randomBetween(-8, 8),          // slight lean
        });
    }
    return drips;
}

function drawDroplet(ctx, x, y, r, color) {
    // Teardrop: circle base + pointed tip upward
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y + r * 0.3, r, 0, Math.PI * 2);
    ctx.fill();
    // pointed top
    ctx.beginPath();
    ctx.moveTo(x - r * 0.45, y + r * 0.3);
    ctx.quadraticCurveTo(x, y - r * 1.4, x + r * 0.45, y + r * 0.3);
    ctx.fill();
}

function drawDrip(ctx, drip, ceilingH, color) {
    if (drip.length <= 0) return;

    const { x, width, length, wobble } = drip;
    const hw = width / 2;
    const tipX = x + wobble * (length / drip.targetLength);
    const tipY = ceilingH + length;

    ctx.fillStyle = color;
    ctx.beginPath();

    // Left side: curves from ceiling down to the tip
    ctx.moveTo(x - hw, ceilingH);
    ctx.bezierCurveTo(
        x - hw, ceilingH + length * 0.5,
        tipX - hw * 0.25, tipY - length * 0.15,
        tipX, tipY
    );
    // Right side: curves back up to ceiling
    ctx.bezierCurveTo(
        tipX + hw * 0.25, tipY - length * 0.15,
        x + hw, ceilingH + length * 0.5,
        x + hw, ceilingH
    );
    ctx.closePath();
    ctx.fill();
}

// ─── React component ─────────────────────────────────────────────────────────
export default function DrippingOverlay({ isActive, color = '#f9ab00' }) {
    const canvasRef = useRef(null);
    const stateRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        return () => window.removeEventListener('resize', resize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Reset state
        stateRef.current = {
            ceilingH: 0,
            targetCeilingH: Math.max(window.innerHeight * 0.28, 200),
            drips: createDrips(canvas.width),
            drops: [],          // falling detached droplets
            lastTime: null,
            totalTime: 0,
        };

        if (!isActive) {
            // Clear canvas when deactivated
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            return;
        }

        const ctx = canvas.getContext('2d');

        const animate = (timestamp) => {
            const state = stateRef.current;
            if (!state.lastTime) state.lastTime = timestamp;
            const dt = Math.min((timestamp - state.lastTime) / 1000, 0.05); // cap at 50ms
            state.lastTime = timestamp;
            state.totalTime += dt;

            // ── Update ─────────────────────────────────────────────────────
            // Ceiling grows slowly from 0 to targetCeilingH (ease-out)
            const ceiling = state.ceilingH;
            const target = state.targetCeilingH;
            if (ceiling < target) {
                state.ceilingH += (target - ceiling) * dt * 0.6 + dt * 25;
                if (state.ceilingH > target) state.ceilingH = target;
            }

            // Drips grow after ceiling starts forming (after ~0.8s)
            if (state.totalTime > 0.8) {
                for (const drip of state.drips) {
                    if (drip.length < drip.targetLength) {
                        drip.length += drip.speed * dt;
                        if (drip.length > drip.targetLength) drip.length = drip.targetLength;
                    }

                    // Release teardrop drops periodically from drip tips
                    drip.dropTimer -= dt;
                    if (drip.dropTimer <= 0 && drip.length > 40) {
                        drip.dropTimer = drip.dropInterval;
                        const tipX = drip.x + drip.wobble * (drip.length / drip.targetLength);
                        const tipY = state.ceilingH + drip.length;
                        state.drops.push({
                            x: tipX,
                            y: tipY,
                            radius: randomBetween(5, 12),
                            vy: randomBetween(5, 20),
                            alpha: 1,
                        });
                    }
                }
            }

            // Gravity on falling drops
            for (const drop of state.drops) {
                drop.vy += 280 * dt;
                drop.y += drop.vy * dt;
                if (drop.y > canvas.height * 0.85) {
                    drop.alpha -= dt * 2;
                }
            }
            state.drops = state.drops.filter(d => d.alpha > 0 && d.y < canvas.height + 80);

            // ── Draw ──────────────────────────────────────────────────────
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Solid ceiling mass
            if (state.ceilingH > 0) {
                ctx.fillStyle = color;
                ctx.fillRect(0, 0, canvas.width, state.ceilingH);
            }

            // Drips hanging from ceiling
            for (const drip of state.drips) {
                drawDrip(ctx, drip, state.ceilingH, color);
            }

            // Falling detached drops
            for (const drop of state.drops) {
                ctx.globalAlpha = drop.alpha;
                drawDroplet(ctx, drop.x, drop.y, drop.radius, color);
                ctx.globalAlpha = 1;
            }

            // Once all drips are at target + 5s have passed → flood bottom
            const allDone = state.drips.every(d => d.length >= d.targetLength);
            if (allDone && state.totalTime > 6) {
                // Gradually fill from where the drips end to the bottom
                const lowestDrip = Math.max(...state.drips.map(d => state.ceilingH + d.length));
                const floodProgress = Math.min((state.totalTime - 6) / 4, 1);
                const floodY = lowestDrip + (canvas.height - lowestDrip) * floodProgress;
                ctx.fillStyle = color;
                ctx.fillRect(0, state.ceilingH, canvas.width, floodY - state.ceilingH);
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [isActive, color]);

    return (
        <div className={`dripping-overlay ${isActive ? 'active' : ''}`}>
            <canvas ref={canvasRef} className="drip-canvas" />
        </div>
    );
}
