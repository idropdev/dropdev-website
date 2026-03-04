import { useState } from 'react';
import './WorkflowCarousel.css';

const steps = [
    {
        number: '01',
        title: 'Domain Data Ingestion',
        description: 'Industry-specific training data is collected, cleaned, and structured to capture the full depth of domain knowledge.',
    },
    {
        number: '02',
        title: 'Specialized Model Training',
        description: 'Fine-tuned for vertical use cases, the model learns terminology, edge cases, and regulatory nuance generic AI cannot handle.',
    },
    {
        number: '03',
        title: 'Workflow Integration',
        description: 'Embedded directly into daily operations — the AI becomes part of how work gets done, not a separate tool to switch to.',
    },
    {
        number: '04',
        title: 'Continuous Improvement',
        description: 'Every use case strengthens the feedback loop, compounding the model\'s advantages over time and widening the moat.',
    },
];

export default function WorkflowCarousel() {
    const [active, setActive] = useState(0);

    const prev = () => setActive((a) => (a - 1 + steps.length) % steps.length);
    const next = () => setActive((a) => (a + 1) % steps.length);

    return (
        <div className="wf-carousel">
            {/* Step indicators */}
            <div className="wf-indicators">
                {steps.map((s, i) => (
                    <button
                        key={i}
                        className={`wf-indicator ${i === active ? 'active' : ''}`}
                        onClick={() => setActive(i)}
                        aria-label={`Step ${s.number}`}
                    >
                        <span className="wf-ind-num">{s.number}</span>
                    </button>
                ))}
            </div>

            {/* Card track */}
            <div className="wf-track">
                {steps.map((s, i) => {
                    const offset = i - active;
                    // Only render the active ± 1 cards
                    const isActive = offset === 0;
                    const isPrev = offset === -1 || (active === 0 && i === steps.length - 1 && false);
                    const isNext = offset === 1;

                    return (
                        <div
                            key={i}
                            className={`wf-card ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
                            style={{ '--offset': offset }}
                            onClick={() => { if (!isActive) setActive(i); }}
                        >
                            <div className="wf-card-number">{s.number}</div>
                            <h4 className="wf-card-title">{s.title}</h4>
                            <p className="wf-card-desc">{s.description}</p>
                        </div>
                    );
                })}
            </div>

            {/* Nav */}
            <div className="wf-nav">
                <button className="wf-btn" onClick={prev} aria-label="Previous">←</button>
                <span className="wf-counter">{active + 1} / {steps.length}</span>
                <button className="wf-btn" onClick={next} aria-label="Next">→</button>
            </div>
        </div>
    );
}
