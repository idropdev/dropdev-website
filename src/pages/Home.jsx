import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroBackground from '../components/HeroBackground';
import IndustryModal from '../components/IndustryModal';
import './Home.css';

// Industry data
const industries = [
    {
        id: 1,
        name: 'Healthcare',
        icon: '🏥',
        problemSpace: 'Fragmented patient data, inefficient administrative workflows, and lack of personalized care coordination across provider networks.',
        aiOpportunity: 'AI-driven diagnostics, predictive patient outcomes, automated clinical documentation, and intelligent care pathway optimization.',
        marketplaceAngle: 'Connect patients, providers, specialists, and care facilities in a unified ecosystem with transparent pricing and quality metrics.',
        whyItWins: 'Regulatory moats, high switching costs, and network effects from aggregated health data create defensible positions.',
    },
    {
        id: 2,
        name: 'Legal',
        icon: '⚖️',
        problemSpace: 'Time-intensive document review, inconsistent contract analysis, and limited access to legal services for SMBs and individuals.',
        aiOpportunity: 'Automated contract analysis, legal research acceleration, compliance monitoring, and predictive case outcome modeling.',
        marketplaceAngle: 'Platform connecting clients with specialized legal professionals, with AI-assisted matching and transparent fee structures.',
        whyItWins: 'Trust-based relationships, regulatory requirements, and accumulated case knowledge create sustainable competitive advantages.',
    },
    {
        id: 3,
        name: 'Real Estate',
        icon: '🏢',
        problemSpace: 'Opaque transaction processes, fragmented property data, and inefficient matching between buyers, sellers, and properties.',
        aiOpportunity: 'Intelligent property valuation, predictive market analytics, automated due diligence, and personalized investment recommendations.',
        marketplaceAngle: 'End-to-end platform connecting all stakeholders: buyers, sellers, agents, lenders, inspectors, and service providers.',
        whyItWins: 'Transaction data network effects, established trust, and integration with financial systems create strong barriers to entry.',
    },
    {
        id: 4,
        name: 'Finance',
        icon: '💰',
        problemSpace: 'Complex compliance requirements, manual underwriting processes, and limited access to sophisticated financial tools for small businesses.',
        aiOpportunity: 'AI-powered risk assessment, automated compliance monitoring, intelligent fraud detection, and personalized financial planning.',
        marketplaceAngle: 'Connect businesses with lenders, investors, and financial service providers through transparent, data-driven matching.',
        whyItWins: 'Regulatory moats, trust requirements, and financial data aggregation create winner-take-most dynamics.',
    },
    {
        id: 5,
        name: 'Education',
        icon: '📚',
        problemSpace: 'One-size-fits-all curriculum, limited personalization, and disconnect between education outcomes and workforce needs.',
        aiOpportunity: 'Adaptive learning paths, intelligent tutoring systems, automated assessment, and skills gap analysis with career mapping.',
        marketplaceAngle: 'Platform connecting learners with educators, mentors, and employers with verified skill credentials.',
        whyItWins: 'Learning data network effects, credentialing moats, and employer integration create defensible ecosystem value.',
    },
    {
        id: 6,
        name: 'Logistics',
        icon: '🚚',
        problemSpace: 'Fragmented supply chains, unpredictable demand patterns, and inefficient last-mile delivery operations.',
        aiOpportunity: 'Demand forecasting, route optimization, predictive maintenance, and autonomous operations coordination.',
        marketplaceAngle: 'Connect shippers, carriers, warehouses, and delivery providers with real-time capacity matching and dynamic pricing.',
        whyItWins: 'Operational data advantages, geographic network effects, and integration complexity create sustainable moats.',
    },
];

// Focus tiles data
const focusTiles = [
    {
        id: 'vertical-ai',
        title: 'Vertical AI SaaS',
        description: 'Purpose-built AI solutions that understand industry-specific workflows, terminology, and compliance requirements.',
        icon: '🤖',
        features: ['Domain Expertise', 'Workflow Integration', 'Compliance-Native'],
    },
    {
        id: 'marketplace',
        title: 'Community Marketplaces',
        description: 'Network-effect platforms that create value through community participation and data aggregation.',
        icon: '🌐',
        features: ['Network Effects', 'Community Trust', 'Value Loops'],
    },
];

export default function Home() {
    const [selectedIndustry, setSelectedIndustry] = useState(null);

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <HeroBackground />
                <div className="hero-content">
                    <div className="hero-badge">Innovation Studio & Venture Builder</div>
                    <h1 className="hero-title">
                        Building the Next Generation of{' '}
                        <span className="text-gradient">Vertical AI Companies</span>
                    </h1>
                    <p className="hero-subtitle">
                        We design and launch category-defining vertical AI SaaS products and
                        community-centric marketplace ecosystems. From whiteboard to scale.
                    </p>
                    <div className="hero-actions">
                        <Link to="/calculator" className="btn btn-primary btn-lg">
                            Estimate Your Build
                        </Link>
                        <Link to="/business" className="btn btn-secondary btn-lg">
                            How We Work
                        </Link>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <div className="scroll-line" />
                </div>
            </section>

            {/* Focus Areas */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Focus</h2>
                        <p>
                            The future of software is specialized, intelligent, and community-centric.
                            We build at the intersection of these forces.
                        </p>
                    </div>

                    <div className="focus-grid">
                        {focusTiles.map((tile) => (
                            <Link
                                to="/focus-areas"
                                key={tile.id}
                                className="focus-tile card card-interactive"
                            >
                                <div className="focus-icon">{tile.icon}</div>
                                <h3>{tile.title}</h3>
                                <p>{tile.description}</p>
                                <div className="focus-features">
                                    {tile.features.map((feature) => (
                                        <span key={feature} className="feature-tag">{feature}</span>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>Industries We Transform</h2>
                        <p>
                            Click any industry to explore the structured opportunity analysis—
                            this interaction is intentional.
                        </p>
                    </div>

                    <div className="industries-grid grid grid-3">
                        {industries.map((industry) => (
                            <button
                                key={industry.id}
                                className="industry-card card card-interactive"
                                onClick={() => setSelectedIndustry(industry)}
                            >
                                <div className="industry-icon">{industry.icon}</div>
                                <h4>{industry.name}</h4>
                                <span className="industry-hint">Click to explore →</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Venture Studio Model */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>The Venture Studio Model</h2>
                        <p>
                            We don&apos;t just consult—we co-create. Our studio model provides
                            strategy, engineering, design, and capital under one roof.
                        </p>
                    </div>

                    <div className="studio-process">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <h4>Ideate</h4>
                            <p>Validate opportunities through rigorous market analysis and technical feasibility assessment.</p>
                        </div>
                        <div className="process-connector" />
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <h4>Build</h4>
                            <p>Design and engineer production-grade products with enterprise-quality architecture.</p>
                        </div>
                        <div className="process-connector" />
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <h4>Launch</h4>
                            <p>Go-to-market with data-driven strategies and initial customer acquisition.</p>
                        </div>
                        <div className="process-connector" />
                        <div className="process-step">
                            <div className="step-number">04</div>
                            <h4>Scale</h4>
                            <p>Accelerate growth through operationalized playbooks and continued technical partnership.</p>
                        </div>
                    </div>

                    <div className="text-center" style={{ marginTop: 'var(--space-3xl)' }}>
                        <Link to="/business" className="btn btn-secondary">
                            Learn About Our Process
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Build Something Exceptional?</h2>
                        <p>
                            Use our cost calculator to get an instant estimate, or reach out
                            to discuss your vision.
                        </p>
                        <div className="cta-actions">
                            <Link to="/calculator" className="btn btn-primary btn-lg">
                                Cost Calculator
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Modal */}
            {selectedIndustry && (
                <IndustryModal
                    industry={selectedIndustry}
                    onClose={() => setSelectedIndustry(null)}
                />
            )}
        </div>
    );
}
