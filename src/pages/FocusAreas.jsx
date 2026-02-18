import './FocusAreas.css';

export default function FocusAreas() {
    return (
        <div className="focus-areas-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <h1>Our Focus Areas</h1>
                        <p className="page-hero-subtitle">
                            We build at the intersection of intelligence and community.
                            Vertical AI SaaS and marketplace ecosystems are our core theses.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vertical AI SaaS */}
            <section id="vertical-ai" className="section">
                <div className="container">
                    <div className="focus-section">
                        <div className="focus-header">
                            <span className="focus-label">Focus Area 01</span>
                            <h2>Vertical AI SaaS</h2>
                            <p>
                                Generic AI tools lack the domain expertise to transform specialized industries.
                                Vertical AI understands the nuances, workflows, and compliance requirements
                                that horizontal solutions can&apos;t address.
                            </p>
                        </div>

                        <div className="focus-content">
                            <div className="advantage-grid">
                                <div className="advantage-card">
                                    <div className="advantage-icon">🎯</div>
                                    <h4>Domain Expertise</h4>
                                    <p>
                                        AI trained on industry-specific data outperforms generic models
                                        by understanding context, terminology, and edge cases.
                                    </p>
                                </div>
                                <div className="advantage-card">
                                    <div className="advantage-icon">⚡</div>
                                    <h4>Workflow Integration</h4>
                                    <p>
                                        Purpose-built tools integrate directly into existing workflows
                                        rather than requiring behavior change.
                                    </p>
                                </div>
                                <div className="advantage-card">
                                    <div className="advantage-icon">🛡️</div>
                                    <h4>Compliance Native</h4>
                                    <p>
                                        Built-in compliance with industry regulations (HIPAA, SOC2, etc.)
                                        from day one, not bolted on later.
                                    </p>
                                </div>
                                <div className="advantage-card">
                                    <div className="advantage-icon">📈</div>
                                    <h4>Data Moats</h4>
                                    <p>
                                        Every customer interaction improves the model, creating
                                        compounding advantages over time.
                                    </p>
                                </div>
                            </div>

                            {/* Interactive Workflow Diagram */}
                            <div className="workflow-diagram">
                                <h4>How Vertical AI Creates Value</h4>
                                <div className="workflow-steps">
                                    <div className="workflow-step">
                                        <div className="workflow-number">1</div>
                                        <div className="workflow-content">
                                            <strong>Domain Data Ingestion</strong>
                                            <span>Industry-specific training data</span>
                                        </div>
                                    </div>
                                    <div className="workflow-arrow">→</div>
                                    <div className="workflow-step">
                                        <div className="workflow-number">2</div>
                                        <div className="workflow-content">
                                            <strong>Specialized Model Training</strong>
                                            <span>Fine-tuned for vertical use cases</span>
                                        </div>
                                    </div>
                                    <div className="workflow-arrow">→</div>
                                    <div className="workflow-step">
                                        <div className="workflow-number">3</div>
                                        <div className="workflow-content">
                                            <strong>Workflow Integration</strong>
                                            <span>Embedded in daily operations</span>
                                        </div>
                                    </div>
                                    <div className="workflow-arrow">→</div>
                                    <div className="workflow-step">
                                        <div className="workflow-number">4</div>
                                        <div className="workflow-content">
                                            <strong>Continuous Improvement</strong>
                                            <span>Feedback loop strengthens model</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Marketplace Ecosystems */}
            <section id="marketplace" className="section section-dark">
                <div className="container">
                    <div className="focus-section">
                        <div className="focus-header">
                            <span className="focus-label">Focus Area 02</span>
                            <h2>Community Marketplace Ecosystems</h2>
                            <p>
                                Platforms that create value through community participation and data aggregation
                                build the strongest moats. Network effects compound over time,
                                making early entrants increasingly difficult to displace.
                            </p>
                        </div>

                        <div className="focus-content">
                            {/* Network Effects Visual */}
                            <div className="network-visual">
                                <div className="network-center">
                                    <div className="network-hub">Platform</div>
                                </div>
                                <div className="network-nodes">
                                    <div className="network-node node-1">
                                        <span className="node-icon">👥</span>
                                        <span className="node-label">Users</span>
                                    </div>
                                    <div className="network-node node-2">
                                        <span className="node-icon">🏪</span>
                                        <span className="node-label">Providers</span>
                                    </div>
                                    <div className="network-node node-3">
                                        <span className="node-icon">📊</span>
                                        <span className="node-label">Data</span>
                                    </div>
                                    <div className="network-node node-4">
                                        <span className="node-icon">💡</span>
                                        <span className="node-label">Insights</span>
                                    </div>
                                </div>
                                <svg className="network-connections" viewBox="0 0 400 400">
                                    <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="5,5" />
                                    <line x1="200" y1="200" x2="200" y2="60" stroke="rgba(99,102,241,0.3)" strokeWidth="2" />
                                    <line x1="200" y1="200" x2="340" y2="200" stroke="rgba(99,102,241,0.3)" strokeWidth="2" />
                                    <line x1="200" y1="200" x2="200" y2="340" stroke="rgba(99,102,241,0.3)" strokeWidth="2" />
                                    <line x1="200" y1="200" x2="60" y2="200" stroke="rgba(99,102,241,0.3)" strokeWidth="2" />
                                </svg>
                            </div>

                            {/* Value Loops */}
                            <div className="value-loops">
                                <h4>Value Creation Loops</h4>
                                <div className="loops-grid">
                                    <div className="loop-card">
                                        <div className="loop-icon">🔄</div>
                                        <h5>Supply-Demand Loop</h5>
                                        <p>More suppliers attract more buyers, which attracts more suppliers.</p>
                                    </div>
                                    <div className="loop-card">
                                        <div className="loop-icon">📈</div>
                                        <h5>Data Network Effect</h5>
                                        <p>More transactions create more data, improving matching and recommendations.</p>
                                    </div>
                                    <div className="loop-card">
                                        <div className="loop-icon">⭐</div>
                                        <h5>Trust & Reputation</h5>
                                        <p>Community-built reputation systems reduce friction and increase conversion.</p>
                                    </div>
                                    <div className="loop-card">
                                        <div className="loop-icon">🔌</div>
                                        <h5>Integration Lock-in</h5>
                                        <p>Deep workflow integration increases switching costs for participants.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Defensibility */}
                            <div className="defensibility-section">
                                <h4>Building Defensibility</h4>
                                <div className="defense-bars">
                                    <div className="defense-item">
                                        <div className="defense-label">Network Effects</div>
                                        <div className="defense-bar">
                                            <div className="defense-fill" style={{ width: '95%' }}>
                                                <span className="defense-value">95%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="defense-item">
                                        <div className="defense-label">Data Advantages</div>
                                        <div className="defense-bar">
                                            <div className="defense-fill" style={{ width: '88%' }}>
                                                <span className="defense-value">88%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="defense-item">
                                        <div className="defense-label">Brand & Trust</div>
                                        <div className="defense-bar">
                                            <div className="defense-fill" style={{ width: '75%' }}>
                                                <span className="defense-value">75%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="defense-item">
                                        <div className="defense-label">Switching Costs</div>
                                        <div className="defense-bar">
                                            <div className="defense-fill" style={{ width: '82%' }}>
                                                <span className="defense-value">82%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Emphasis */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Industry-Specific Emphasis</h2>
                        <p>
                            We prioritize industries where vertical AI and marketplace dynamics
                            create compounding advantages over horizontal solutions.
                        </p>
                    </div>

                    <div className="industry-emphasis-grid grid grid-4">
                        <div className="emphasis-card">
                            <span className="emphasis-icon">🏥</span>
                            <h5>Healthcare</h5>
                            <p>Clinical workflows, patient coordination, medical documentation</p>
                        </div>
                        <div className="emphasis-card">
                            <span className="emphasis-icon">⚖️</span>
                            <h5>Legal</h5>
                            <p>Contract analysis, legal research, compliance automation</p>
                        </div>
                        <div className="emphasis-card">
                            <span className="emphasis-icon">🏢</span>
                            <h5>Real Estate</h5>
                            <p>Property intelligence, transaction coordination, market analytics</p>
                        </div>
                        <div className="emphasis-card">
                            <span className="emphasis-icon">💰</span>
                            <h5>Finance</h5>
                            <p>Risk assessment, underwriting, compliance monitoring</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
