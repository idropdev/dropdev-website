import { useState, useMemo } from 'react';
import './Calculator.css';

const productTypes = [
    { id: 'vertical-ai', label: 'Vertical AI SaaS', baseMultiplier: 1.2 },
    { id: 'marketplace', label: 'Community Marketplace', baseMultiplier: 1.3 },
    { id: 'hybrid', label: 'Hybrid (AI + Marketplace)', baseMultiplier: 1.5 },
];

const industries = [
    { id: 'healthcare', label: 'Healthcare', complexityFactor: 1.4 },
    { id: 'legal', label: 'Legal', complexityFactor: 1.3 },
    { id: 'finance', label: 'Finance', complexityFactor: 1.4 },
    { id: 'realestate', label: 'Real Estate', complexityFactor: 1.2 },
    { id: 'education', label: 'Education', complexityFactor: 1.1 },
    { id: 'logistics', label: 'Logistics', complexityFactor: 1.2 },
    { id: 'other', label: 'Other', complexityFactor: 1.0 },
];

const featureComplexityLevels = [
    { id: 1, label: 'MVP / Core Features', description: 'Essential functionality only', multiplier: 1.0 },
    { id: 2, label: 'Standard', description: 'Core + key differentiators', multiplier: 1.4 },
    { id: 3, label: 'Advanced', description: 'Full feature set with integrations', multiplier: 1.8 },
    { id: 4, label: 'Enterprise', description: 'Complete platform with enterprise features', multiplier: 2.4 },
];

const aiSophisticationLevels = [
    { id: 1, label: 'Basic AI', description: 'Simple automation, rule-based logic', multiplier: 1.0 },
    { id: 2, label: 'Standard ML', description: 'Pre-trained models, basic customization', multiplier: 1.3 },
    { id: 3, label: 'Custom Models', description: 'Fine-tuned models, domain-specific training', multiplier: 1.7 },
    { id: 4, label: 'Advanced AI', description: 'Multi-modal, real-time, highly specialized', multiplier: 2.2 },
];

const timelines = [
    { id: 'standard', label: '6-9 months', multiplier: 1.0, description: 'Standard timeline' },
    { id: 'accelerated', label: '4-6 months', multiplier: 1.25, description: 'Accelerated delivery' },
    { id: 'rapid', label: '3-4 months', multiplier: 1.5, description: 'Rapid deployment' },
];

const engagementModels = [
    { type: 'Studio Partnership', description: 'Equity + reduced cash, full co-creation', icon: '🤝' },
    { type: 'Development Contract', description: 'Fixed scope, milestone-based payments', icon: '📋' },
    { type: 'Hybrid Model', description: 'Blended equity and development fees', icon: '⚖️' },
];

export default function Calculator() {
    const [productType, setProductType] = useState('vertical-ai');
    const [industry, setIndustry] = useState('healthcare');
    const [featureComplexity, setFeatureComplexity] = useState(2);
    const [aiSophistication, setAiSophistication] = useState(2);
    const [timeline, setTimeline] = useState('standard');

    const calculation = useMemo(() => {
        const basePrice = 150000;

        const productMultiplier = productTypes.find(p => p.id === productType)?.baseMultiplier || 1;
        const industryMultiplier = industries.find(i => i.id === industry)?.complexityFactor || 1;
        const featureMultiplier = featureComplexityLevels.find(f => f.id === featureComplexity)?.multiplier || 1;
        const aiMultiplier = aiSophisticationLevels.find(a => a.id === aiSophistication)?.multiplier || 1;
        const timelineMultiplier = timelines.find(t => t.id === timeline)?.multiplier || 1;

        const total = basePrice * productMultiplier * industryMultiplier * featureMultiplier * aiMultiplier * timelineMultiplier;

        const lowEstimate = Math.round(total * 0.85 / 10000) * 10000;
        const highEstimate = Math.round(total * 1.15 / 10000) * 10000;

        // Build phases based on selections
        const phases = [
            { name: 'Discovery & Planning', duration: '2-3 weeks', percentage: 10 },
            { name: 'Design & Architecture', duration: '3-4 weeks', percentage: 15 },
            { name: 'Core Development', duration: featureComplexity >= 3 ? '8-12 weeks' : '6-8 weeks', percentage: 45 },
            { name: 'AI Integration', duration: aiSophistication >= 3 ? '4-6 weeks' : '2-3 weeks', percentage: 20 },
            { name: 'Testing & Launch', duration: '2-3 weeks', percentage: 10 },
        ];

        // Recommended engagement based on project size
        let recommendedEngagement;
        if (total < 250000) {
            recommendedEngagement = 'Development Contract';
        } else if (total > 500000) {
            recommendedEngagement = 'Studio Partnership';
        } else {
            recommendedEngagement = 'Hybrid Model';
        }

        return { lowEstimate, highEstimate, phases, recommendedEngagement };
    }, [productType, industry, featureComplexity, aiSophistication, timeline]);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <div className="calculator-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <h1>Cost Calculator</h1>
                        <p className="page-hero-subtitle">
                            Get an instant estimate for your project. This tool demonstrates our
                            product thinking and helps qualify serious inquiries.
                        </p>
                    </div>
                </div>
            </section>

            {/* Calculator */}
            <section className="section">
                <div className="container">
                    <div className="calculator-layout">
                        {/* Input Panel */}
                        <div className="calculator-inputs">
                            <div className="input-section">
                                <h4>Product Type</h4>
                                <div className="radio-group">
                                    {productTypes.map((type) => (
                                        <label key={type.id} className={`radio-card ${productType === type.id ? 'selected' : ''}`}>
                                            <input
                                                type="radio"
                                                name="productType"
                                                value={type.id}
                                                checked={productType === type.id}
                                                onChange={(e) => setProductType(e.target.value)}
                                            />
                                            <span className="radio-label">{type.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="input-section">
                                <h4>Industry</h4>
                                <select
                                    className="form-select"
                                    value={industry}
                                    onChange={(e) => setIndustry(e.target.value)}
                                >
                                    {industries.map((ind) => (
                                        <option key={ind.id} value={ind.id}>{ind.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="input-section">
                                <h4>Feature Complexity</h4>
                                <div className="slider-group">
                                    <input
                                        type="range"
                                        min="1"
                                        max="4"
                                        value={featureComplexity}
                                        onChange={(e) => setFeatureComplexity(Number(e.target.value))}
                                        className="slider"
                                    />
                                    <div className="slider-labels">
                                        {featureComplexityLevels.map((level) => (
                                            <span
                                                key={level.id}
                                                className={`slider-label ${featureComplexity === level.id ? 'active' : ''}`}
                                            >
                                                {level.label}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="slider-description">
                                        {featureComplexityLevels.find(f => f.id === featureComplexity)?.description}
                                    </p>
                                </div>
                            </div>

                            <div className="input-section">
                                <h4>AI Sophistication</h4>
                                <div className="slider-group">
                                    <input
                                        type="range"
                                        min="1"
                                        max="4"
                                        value={aiSophistication}
                                        onChange={(e) => setAiSophistication(Number(e.target.value))}
                                        className="slider"
                                    />
                                    <div className="slider-labels">
                                        {aiSophisticationLevels.map((level) => (
                                            <span
                                                key={level.id}
                                                className={`slider-label ${aiSophistication === level.id ? 'active' : ''}`}
                                            >
                                                {level.label}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="slider-description">
                                        {aiSophisticationLevels.find(a => a.id === aiSophistication)?.description}
                                    </p>
                                </div>
                            </div>

                            <div className="input-section">
                                <h4>Timeline</h4>
                                <div className="radio-group">
                                    {timelines.map((t) => (
                                        <label key={t.id} className={`radio-card ${timeline === t.id ? 'selected' : ''}`}>
                                            <input
                                                type="radio"
                                                name="timeline"
                                                value={t.id}
                                                checked={timeline === t.id}
                                                onChange={(e) => setTimeline(e.target.value)}
                                            />
                                            <span className="radio-label">{t.label}</span>
                                            <span className="radio-desc">{t.description}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Output Panel */}
                        <div className="calculator-output">
                            <div className="output-card estimate-card">
                                <h3>Estimated Investment</h3>
                                <div className="estimate-range">
                                    <span className="estimate-value">{formatCurrency(calculation.lowEstimate)}</span>
                                    <span className="estimate-divider">—</span>
                                    <span className="estimate-value">{formatCurrency(calculation.highEstimate)}</span>
                                </div>
                                <p className="estimate-note">
                                    Final pricing determined after discovery phase
                                </p>
                            </div>

                            <div className="output-card phases-card">
                                <h4>Build Phases</h4>
                                <div className="phases-list">
                                    {calculation.phases.map((phase, index) => (
                                        <div key={index} className="phase-item">
                                            <div className="phase-info">
                                                <span className="phase-name">{phase.name}</span>
                                                <span className="phase-duration">{phase.duration}</span>
                                            </div>
                                            <div className="phase-bar">
                                                <div
                                                    className="phase-fill"
                                                    style={{ width: `${phase.percentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="output-card engagement-card">
                                <h4>Suggested Engagement</h4>
                                <div className="engagement-recommendation">
                                    {engagementModels.map((model) => (
                                        <div
                                            key={model.type}
                                            className={`engagement-option ${calculation.recommendedEngagement === model.type ? 'recommended' : ''}`}
                                        >
                                            <span className="engagement-icon">{model.icon}</span>
                                            <div className="engagement-info">
                                                <strong>{model.type}</strong>
                                                <span>{model.description}</span>
                                            </div>
                                            {calculation.recommendedEngagement === model.type && (
                                                <span className="recommended-badge">Recommended</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <a href="/contact" className="btn btn-primary btn-lg output-cta">
                                Discuss Your Project
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
