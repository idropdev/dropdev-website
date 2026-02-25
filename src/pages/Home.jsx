import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroBackground from '../components/HeroBackground';
import IndustryModal from '../components/IndustryModal';
import ProcessCarousel3D from '../components/ProcessCarousel3D';
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

const layoutModes = ['grid-3x2', 'grid-2x3', 'list-horizontal', 'masonry'];

export default function Home() {
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [layoutMode, setLayoutMode] = useState(0);

    const cycleLayout = () => {
        setLayoutMode((prev) => (prev + 1) % layoutModes.length);
    };

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <HeroBackground />
                <div className="hero-content">
                    <h1 className="hero-title">
                        Building the Next Generation of{' '}
                        <span className="text-gradient">Vertical AI Companies</span>
                    </h1>
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
                                to={`/focus-areas#${tile.id}`}
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
                    <div className="section-header section-header-with-action">
                        <div className="section-header-content">
                            <h2>Industries We Transform</h2>
                            <p>
                                Click any industry to explore the structured opportunity analysis—
                                this interaction is intentional.
                            </p>
                        </div>
                        <button
                            className="layout-toggle-btn"
                            onClick={cycleLayout}
                            aria-label="Change layout"
                        >
                            <span className="layout-toggle-icon">
                                {layoutModes[layoutMode] === 'grid-3x2' && '▦'}
                                {layoutModes[layoutMode] === 'grid-2x3' && '▥'}
                                {layoutModes[layoutMode] === 'list-horizontal' && '☰'}
                                {layoutModes[layoutMode] === 'masonry' && '⊞'}
                            </span>
                            <span className="layout-toggle-text">Switch View</span>
                        </button>
                    </div>

                    <div className={`industries-grid layout-${layoutModes[layoutMode]}`}>
                        {industries.map((industry) => (
                            <button
                                key={industry.id}
                                className="industry-card card card-interactive"
                                onClick={() => setSelectedIndustry(industry)}
                            >
                                <div className="industry-icon">{industry.icon}</div>
                                <div className="industry-content">
                                    <h4>{industry.name}</h4>
                                    <span className="industry-hint">Click to explore →</span>
                                </div>
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

                    <ProcessCarousel3D />

                    <div className="text-center" style={{ marginTop: 'var(--space-xl)' }}>
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
                            <a href="tel:+19152341444" className="btn btn-secondary btn-lg">
                                Get in Touch
                            </a>
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
