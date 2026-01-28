import './Business.css';

export default function Business() {
    const resources = [
        { icon: '🏗️', title: 'Engineering', description: 'Full-stack product engineering with modern technology stacks and scalable architectures.' },
        { icon: '🎨', title: 'Design', description: 'Product and brand design that creates memorable, intuitive user experiences.' },
        { icon: '📊', title: 'Strategy', description: 'Market analysis, competitive positioning, and go-to-market planning.' },
        { icon: '💼', title: 'Operations', description: 'Shared infrastructure, legal, finance, and operational support.' },
        { icon: '💰', title: 'Capital', description: 'Seed funding and investor network access for portfolio companies.' },
        { icon: '🤝', title: 'Network', description: 'Strategic partnerships, customer introductions, and ecosystem access.' },
    ];

    const validationSteps = [
        { phase: 'Discovery', duration: '2 weeks', activities: ['Market sizing', 'Competitive analysis', 'Initial customer interviews', 'Technical feasibility'] },
        { phase: 'Validation', duration: '4 weeks', activities: ['Problem validation', 'Solution hypothesis', 'MVP scope definition', 'Business model canvas'] },
        { phase: 'Design', duration: '4 weeks', activities: ['UX research', 'Information architecture', 'Visual design system', 'Prototype development'] },
        { phase: 'Build', duration: '8-12 weeks', activities: ['Core product engineering', 'AI/ML integration', 'Quality assurance', 'Security hardening'] },
    ];

    return (
        <div className="business-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <h1>The Venture Studio Model</h1>
                        <p className="page-hero-subtitle">
                            We don&apos;t just advise—we co-create. Our studio model provides
                            strategy, engineering, design, and capital as an integrated system.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Venture Studio */}
            <section className="section">
                <div className="container">
                    <div className="split-content">
                        <div className="split-text">
                            <h2>Why a Venture Studio?</h2>
                            <p>
                                Traditional development agencies focus on execution without ownership.
                                VCs provide capital but limited operational support. Venture studios
                                combine the best of both worlds.
                            </p>
                            <ul className="feature-list">
                                <li>
                                    <strong>Aligned Incentives</strong> — We invest our resources and take
                                    equity, ensuring our success is tied to yours.
                                </li>
                                <li>
                                    <strong>Repeatable Excellence</strong> — We've built systems and playbooks
                                    that accelerate every aspect of company building.
                                </li>
                                <li>
                                    <strong>Concentrated Expertise</strong> — Our team brings deep vertical
                                    experience, not generalist consulting.
                                </li>
                                <li>
                                    <strong>De-risked Execution</strong> — Our process systematically
                                    validates assumptions before major investment.
                                </li>
                            </ul>
                        </div>
                        <div className="split-visual">
                            <div className="comparison-card">
                                <div className="comparison-header comparison-old">Traditional Agency</div>
                                <ul className="comparison-list">
                                    <li>Fixed scope contracts</li>
                                    <li>Hourly/monthly billing</li>
                                    <li>Handoff at delivery</li>
                                    <li>No ongoing stake</li>
                                </ul>
                            </div>
                            <div className="comparison-card">
                                <div className="comparison-header comparison-new">Venture Studio</div>
                                <ul className="comparison-list comparison-positive">
                                    <li>Partnership model</li>
                                    <li>Equity alignment</li>
                                    <li>Continuous support</li>
                                    <li>Shared success</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Idea Validation */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Validation Framework</h2>
                        <p>
                            Every venture begins with rigorous validation. We systematically
                            de-risk opportunities before committing significant resources.
                        </p>
                    </div>

                    <div className="validation-timeline">
                        {validationSteps.map((step, index) => (
                            <div key={step.phase} className="validation-step">
                                <div className="validation-marker">
                                    <span className="marker-number">{index + 1}</span>
                                </div>
                                <div className="validation-content">
                                    <div className="validation-header">
                                        <h4>{step.phase}</h4>
                                        <span className="validation-duration">{step.duration}</span>
                                    </div>
                                    <ul className="validation-activities">
                                        {step.activities.map((activity) => (
                                            <li key={activity}>{activity}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shared Resources */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Shared Infrastructure</h2>
                        <p>
                            Portfolio companies gain access to our entire resource stack,
                            dramatically reducing the overhead of early-stage company building.
                        </p>
                    </div>

                    <div className="resources-grid grid grid-3">
                        {resources.map((resource) => (
                            <div key={resource.title} className="resource-card card">
                                <div className="resource-icon">{resource.icon}</div>
                                <h4>{resource.title}</h4>
                                <p>{resource.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lifecycle */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>Build → Launch → Scale</h2>
                        <p>
                            Our engagement doesn't end at launch. We provide ongoing
                            support through each phase of growth.
                        </p>
                    </div>

                    <div className="lifecycle-stages">
                        <div className="lifecycle-stage">
                            <div className="stage-icon">🔧</div>
                            <h3>Build</h3>
                            <p>
                                Co-develop the product from concept to production-ready.
                                Full engineering, design, and product management support.
                            </p>
                            <div className="stage-metrics">
                                <div className="metric">
                                    <span className="metric-value">0-6</span>
                                    <span className="metric-label">months</span>
                                </div>
                            </div>
                        </div>

                        <div className="lifecycle-connector">
                            <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0,10 L100,10" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                                <polygon points="95,5 100,10 95,15" fill="currentColor" />
                            </svg>
                        </div>

                        <div className="lifecycle-stage">
                            <div className="stage-icon">🚀</div>
                            <h3>Launch</h3>
                            <p>
                                Go-to-market execution with data-driven customer acquisition,
                                pricing validation, and early traction building.
                            </p>
                            <div className="stage-metrics">
                                <div className="metric">
                                    <span className="metric-value">6-12</span>
                                    <span className="metric-label">months</span>
                                </div>
                            </div>
                        </div>

                        <div className="lifecycle-connector">
                            <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0,10 L100,10" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                                <polygon points="95,5 100,10 95,15" fill="currentColor" />
                            </svg>
                        </div>

                        <div className="lifecycle-stage">
                            <div className="stage-icon">📈</div>
                            <h3>Scale</h3>
                            <p>
                                Growth acceleration with hiring support, process optimization,
                                and continued product evolution.
                            </p>
                            <div className="stage-metrics">
                                <div className="metric">
                                    <span className="metric-value">12+</span>
                                    <span className="metric-label">months</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
