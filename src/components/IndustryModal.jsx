import { useEffect } from 'react';
import './IndustryModal.css';

export default function IndustryModal({ industry, onClose }) {
    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    if (!industry) return null;

    // Format JSON for display with syntax highlighting
    const formatJson = (data) => {
        return JSON.stringify(data, null, 2);
    };

    const industryData = {
        industry: industry.name,
        problem_space: industry.problemSpace,
        ai_opportunity: industry.aiOpportunity,
        marketplace_angle: industry.marketplaceAngle,
        why_it_wins: industry.whyItWins,
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-header-content">
                        <span className="modal-icon">{industry.icon}</span>
                        <h3>{industry.name}</h3>
                    </div>
                    <button className="modal-close" onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="modal-body">
                    <div className="modal-section">
                        <h4>Problem Space</h4>
                        <p>{industry.problemSpace}</p>
                    </div>

                    <div className="modal-section">
                        <h4>AI Opportunity</h4>
                        <p>{industry.aiOpportunity}</p>
                    </div>

                    <div className="modal-section">
                        <h4>Marketplace Angle</h4>
                        <p>{industry.marketplaceAngle}</p>
                    </div>

                    <div className="modal-section">
                        <h4>Why It Wins</h4>
                        <p>{industry.whyItWins}</p>
                    </div>

                    <div className="modal-json">
                        <div className="json-header">
                            <span className="json-label">Structured Data</span>
                            <button
                                className="json-copy"
                                onClick={() => navigator.clipboard.writeText(formatJson(industryData))}
                            >
                                Copy JSON
                            </button>
                        </div>
                        <pre className="code-block">
                            <code>{formatJson(industryData)}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
