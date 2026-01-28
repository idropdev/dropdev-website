import './About.css';

export default function About() {
    return (
        <div className="about-page">
            {/* Hero */}
            <section className="page-hero about-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <h1>About DropDev</h1>
                        <p className="page-hero-subtitle">
                            An innovation studio dedicated to building the next generation of
                            category-defining companies.
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
                            We exist to design and launch vertical AI SaaS products and
                            community-centric marketplace ecosystems that transform how
                            industries operate.
                        </p>
                        <p>
                            The future of software is specialized, intelligent, and community-centric.
                            Generic solutions are giving way to purpose-built AI that understands
                            industry-specific workflows, terminology, and compliance requirements.
                            We build at this inflection point.
                        </p>
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
                                    Deep industry expertise creates defensible advantages that
                                    horizontal tools cannot match. We build for specific verticals,
                                    not generic use cases.
                                </p>
                            </div>

                            <div className="philosophy-item">
                                <div className="philosophy-number">02</div>
                                <h4>Community Creates Moats</h4>
                                <p>
                                    Network effects compound over time. Platforms that aggregate
                                    community participation and data become increasingly difficult
                                    to displace.
                                </p>
                            </div>

                            <div className="philosophy-item">
                                <div className="philosophy-number">03</div>
                                <h4>Co-creation Over Consulting</h4>
                                <p>
                                    We don't advise from the sidelines—we build alongside founders.
                                    Our studio model aligns incentives through equity participation
                                    and shared risk.
                                </p>
                            </div>

                            <div className="philosophy-item">
                                <div className="philosophy-number">04</div>
                                <h4>Systems Thinking</h4>
                                <p>
                                    Great products emerge from understanding entire ecosystems, not
                                    just user interfaces. We design for the system, not just the screen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why We Exist */}
            <section className="section">
                <div className="container container-narrow">
                    <div className="about-section">
                        <h2>Why DropDev Exists</h2>
                        <p className="lead-text">
                            The best companies of the next decade will be vertical-first,
                            AI-native, and community-driven.
                        </p>
                        <p>
                            We started DropDev because we saw a gap: the talent and resources
                            needed to build truly category-defining companies were scattered
                            across agencies, venture funds, and corporate innovation labs—
                            none of which had the structure to systematically create and
                            launch new ventures.
                        </p>
                        <p>
                            The venture studio model solves this. By combining strategy,
                            engineering, design, and capital under one roof, we can move
                            faster, take more thoughtful risks, and give founders the
                            comprehensive support they need from day one.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="section section-dark">
                <div className="container container-narrow">
                    <div className="about-section vision-section">
                        <h2>Our Vision</h2>
                        <blockquote className="vision-quote">
                            "We believe the next generation of enduring companies will be
                            built by combining deep vertical expertise, AI-native architectures,
                            and community-driven network effects. Our role is to be the best
                            partner for founders building at this intersection."
                        </blockquote>
                        <div className="vision-future">
                            <h4>The Future of Software</h4>
                            <div className="future-points">
                                <div className="future-point">
                                    <span className="point-icon">🎯</span>
                                    <div className="point-content">
                                        <strong>Specialized</strong>
                                        <span>Built for specific industries, not generic use cases</span>
                                    </div>
                                </div>
                                <div className="future-point">
                                    <span className="point-icon">🧠</span>
                                    <div className="point-content">
                                        <strong>Intelligent</strong>
                                        <span>AI-native from the ground up, not bolted on</span>
                                    </div>
                                </div>
                                <div className="future-point">
                                    <span className="point-icon">👥</span>
                                    <div className="point-content">
                                        <strong>Community-Centric</strong>
                                        <span>Value created through participation and network effects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
