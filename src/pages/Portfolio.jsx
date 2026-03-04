import { useState } from 'react';
import IndustryModal from '../components/IndustryModal';
import RainOverlay from '../components/RainOverlay';
import './Portfolio.css';

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
    {
        id: 7,
        name: 'Manufacturing',
        icon: '🏭',
        problemSpace: 'Equipment downtime, quality control inconsistencies, and supply chain visibility gaps.',
        aiOpportunity: 'Predictive maintenance, computer vision quality inspection, demand forecasting, and automated production scheduling.',
        marketplaceAngle: 'Connect manufacturers with suppliers, distributors, and service providers in an integrated industrial ecosystem.',
        whyItWins: 'Operational data from equipment, supply chain integration, and switching costs create durable competitive advantages.',
    },
    {
        id: 8,
        name: 'Insurance',
        icon: '🛡️',
        problemSpace: 'Manual underwriting processes, fraud detection challenges, and claims processing inefficiencies.',
        aiOpportunity: 'Automated risk assessment, fraud pattern detection, claims automation, and personalized policy recommendations.',
        marketplaceAngle: 'Connect insurers, brokers, and customers with transparent comparison and streamlined purchasing.',
        whyItWins: 'Actuarial data advantages, regulatory moats, and customer lifetime value create defensible positions.',
    },
    {
        id: 9,
        name: 'Agriculture',
        icon: '🌾',
        problemSpace: 'Unpredictable yields, resource inefficiency, and fragmented market access for producers.',
        aiOpportunity: 'Precision agriculture, yield prediction, disease detection, and automated resource optimization.',
        marketplaceAngle: 'Connect farmers with buyers, suppliers, and service providers with transparent pricing and logistics.',
        whyItWins: 'Farm data aggregation, geographic density, and supply chain integration create network effect moats.',
    },
];

export default function Portfolio() {
    const [selectedIndustry, setSelectedIndustry] = useState(null);

    return (
        <div className="portfolio-page">
            {/* Rain / Water background animation - always active on this page */}
            <RainOverlay isActive={true} />

            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <h1>Portfolio &amp; Verticals</h1>
                        <p className="page-hero-subtitle">
                            Explore the industries where we see the strongest opportunities for
                            vertical AI and marketplace innovation. Click any industry for
                            structured analysis.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="section">
                <div className="container">
                    <div className="portfolio-grid">
                        {industries.map((industry) => (
                            <button
                                key={industry.id}
                                className="portfolio-card"
                                onClick={() => setSelectedIndustry(industry)}
                            >
                                <div className="portfolio-card-icon">{industry.icon}</div>
                                <div className="portfolio-card-content">
                                    <h4>{industry.name}</h4>
                                    <span className="portfolio-card-hint">Click to explore →</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="portfolio-note">
                        <p>
                            <strong>Note:</strong> Each industry card returns structured JSON data
                            when clicked. This interaction pattern demonstrates intentional,
                            engineered data delivery—not decoration.
                        </p>
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
