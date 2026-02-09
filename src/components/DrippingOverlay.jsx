import './DrippingOverlay.css';

export default function DrippingOverlay({ isActive, color = '#f9ab00' }) {
    return (
        <div className={`dripping-overlay ${isActive ? 'active' : ''}`}>
            {/* Multiple drip columns with varying delays for organic feel */}
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={i}
                    className="drip-column"
                    style={{
                        left: `${i * 5}%`,
                        animationDelay: `${Math.random() * 0.5}s`,
                        width: `${5 + Math.random() * 2}%`,
                    }}
                >
                    <div
                        className="drip-fill"
                        style={{ backgroundColor: color }}
                    />
                    <div
                        className="drip-drop"
                        style={{ backgroundColor: color }}
                    />
                </div>
            ))}
            {/* Base fill that comes after drips */}
            <div
                className="drip-base"
                style={{ backgroundColor: color }}
            />
        </div>
    );
}
