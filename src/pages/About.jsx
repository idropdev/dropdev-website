import './About.css';

export default function About() {
    return (
        <div className="about-page">
            {/* Hero */}
            <section className="page-hero about-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <h1>We Build What Others Only Imagine</h1>
                        <p className="page-hero-subtitle">
                            DropDev is a vertical AI consulting company. We bring cutting-edge technology—OCR, RAG systems, local AI, and purpose-built software—into communities and industries that need it most. We make the impossible possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="section">
                <div className="container container-narrow">
                    <div className="about-section">
                        <h2>Our Mission</h2>
                        <p className="lead-text">
                            To empower people through technology.
                        </p>
                        <p>
                            We believe AI should not belong only to the Fortune 500. Our mission is to bring enterprise-grade artificial intelligence to organizations, communities, and industries that are ready to leap forward—but haven't had the right technology partner to get them there.
                        </p>
                        <p>
                            We don't just consult. We look at what you're doing and show you how we can build it better—faster, smarter, and with AI at the core. If your competitors are using yesterday's tools, we'll help you build tomorrow's platform today.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Vertical AI Stack</h2>
                        <p>
                            Real technology, delivered end-to-end. We don't pitch frameworks — we ship systems.
                        </p>
                    </div>

                    <div className="about-tech-grid">
                        <div className="about-tech-item">
                            <div className="about-tech-icon">🔍</div>
                            <div className="about-tech-content">
                                <h3>OCR &amp; Document Intelligence</h3>
                                <p>
                                    We extract structured, actionable data from any document—medical records, contracts, invoices, handwritten forms. Our OCR pipelines work at scale, in real-time, and achieve near-human accuracy even on complex layouts.
                                </p>
                                <ul className="about-tech-list">
                                    <li>Multi-format extraction (PDF, image, scan, handwritten)</li>
                                    <li>Domain-specific models fine-tuned for your industry</li>
                                    <li>Integration with your existing workflows and databases</li>
                                </ul>
                            </div>
                        </div>

                        <div className="about-tech-item">
                            <div className="about-tech-icon">🧠</div>
                            <div className="about-tech-content">
                                <h3>RAG Systems (Retrieval-Augmented Generation)</h3>
                                <p>
                                    AI that answers from <em>your</em> data, not the internet. RAG systems connect large language models to your proprietary knowledge base—eliminating hallucinations and ensuring every output is grounded in verified facts.
                                </p>
                                <ul className="about-tech-list">
                                    <li>Custom vector databases built on your documents</li>
                                    <li>Semantic search across millions of records in milliseconds</li>
                                    <li>Cited, traceable answers for compliance-sensitive environments</li>
                                </ul>
                            </div>
                        </div>

                        <div className="about-tech-item">
                            <div className="about-tech-icon">🔒</div>
                            <div className="about-tech-content">
                                <h3>Local RAG (On-Premise AI)</h3>
                                <p>
                                    Full RAG pipelines that run entirely inside your network. Zero data leaves your infrastructure. Built for healthcare, legal, government, and any organization where data sovereignty is non-negotiable.
                                </p>
                                <ul className="about-tech-list">
                                    <li>Air-gapped deployment—no cloud dependencies</li>
                                    <li>HIPAA, SOC 2, and industry-compliance ready</li>
                                    <li>Open-source LLM integration (Llama 3, Mistral, Gemma)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="about-tech-item">
                            <div className="about-tech-icon">⚡</div>
                            <div className="about-tech-content">
                                <h3>Local AI Inference</h3>
                                <p>
                                    Deploy open-source large language models on your own hardware. Complete data sovereignty, no API costs, no vendor lock-in. We set up, optimize, and maintain your local AI infrastructure from day one.
                                </p>
                                <ul className="about-tech-list">
                                    <li>GPU-optimized inference servers (NVIDIA, AMD, Apple Silicon)</li>
                                    <li>Model quantization for cost-effective edge deployments</li>
                                    <li>Ongoing model updates and performance tuning</li>
                                </ul>
                            </div>
                        </div>

                        <div className="about-tech-item">
                            <div className="about-tech-icon">🏗️</div>
                            <div className="about-tech-content">
                                <h3>Vertical AI SaaS Development</h3>
                                <p>
                                    We build software products purpose-designed for a single industry. Not generic tools dressed up for your sector—actual platforms that understand your domain, speak your language, and fit your workflows from day one.
                                </p>
                                <ul className="about-tech-list">
                                    <li>Full-stack product development from prototype to production</li>
                                    <li>Healthcare (see HealthAtlas), mapping, and community platforms</li>
                                    <li>Equity partnerships available for high-conviction ventures</li>
                                </ul>
                            </div>
                        </div>

                        <div className="about-tech-item">
                            <div className="about-tech-icon">🌐</div>
                            <div className="about-tech-content">
                                <h3>Community Marketplace Engineering</h3>
                                <p>
                                    We architect and build the network-effect platforms of the next decade. Marketplaces that create compounding community value—where every new participant makes the platform more valuable for everyone else.
                                </p>
                                <ul className="about-tech-list">
                                    <li>Multi-sided marketplace architecture and payment flows</li>
                                    <li>AI-assisted matching, ranking, and recommendation engines</li>
                                    <li>Growth mechanics and viral loop engineering</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="section">
                <div className="container container-narrow">
                    <div className="about-section vision-section">
                        <h2>Our Vision</h2>
                        <blockquote className="vision-quote">
                            "We believe in a world where the best technology doesn't belong only to the largest companies. Our role is to bring AI capability to every community, every industry, every founder with an idea worth building—and show them what becomes possible."
                        </blockquote>
                        <div className="vision-future">
                            <h4>How We Empower People</h4>
                            <div className="future-points">
                                <div className="future-point">
                                    <span className="point-icon">🤝</span>
                                    <div className="point-content">
                                        <strong>Technology Into Community</strong>
                                        <span>We build with communities, not just for them—ensuring technology adoption creates real, lasting value</span>
                                    </div>
                                </div>
                                <div className="future-point">
                                    <span className="point-icon">🚀</span>
                                    <div className="point-content">
                                        <strong>The Impossible Made Possible</strong>
                                        <span>If you have a challenge that feels unsolvable, talk to us. We thrive at the edge of what's technically possible</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section section-dark">
                <div className="container container-narrow">
                    <div className="about-section">
                        <h2>Our Philosophy</h2>

                        <div className="philosophy-grid">
                            <div className="philosophy-item">
                                <div className="philosophy-number">01</div>
                                <h4>Vertical Beats Horizontal</h4>
                                <p>
                                    Deep industry expertise creates defensible advantages that horizontal tools cannot match. We build for specific verticals, not generic use cases.
                                </p>
                            </div>

                            <div className="philosophy-item">
                                <div className="philosophy-number">02</div>
                                <h4>Local-First AI</h4>
                                <p>
                                    Data privacy is not a feature—it's a foundation. We build AI systems that run where your data lives, giving you complete control and compliance confidence.
                                </p>
                            </div>

                            <div className="philosophy-item">
                                <div className="philosophy-number">03</div>
                                <h4>Ship, Then Improve</h4>
                                <p>
                                    The best AI system is one that's actually running in production. We bias toward shipping working systems fast, then optimizing relentlessly.
                                </p>
                            </div>

                            <div className="philosophy-item">
                                <div className="philosophy-number">04</div>
                                <h4>We Can Build It Better</h4>
                                <p>
                                    We look at what exists in your industry and we ask: how would we rebuild this from scratch with modern AI? The answer is always illuminating.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="about-cta">
                        <h2>Ready to See What's Possible?</h2>
                        <p>Tell us what you're building—or what's holding you back. We'll bring the AI.</p>
                        <a href="tel:+19152341444" className="btn btn-primary btn-lg">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
