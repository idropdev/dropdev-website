import { useState } from 'react';
import './Team.css';

const teamMembers = [
    {
        id: 1,
        name: 'David Marek',
        role: 'Founder & CEO',
        bio: 'Technology consultant and the founder of DropDev. His extensive career includes pivotal roles at industry giants like Intel and Texas Instruments, complemented by strategic work for major firms across finance, telecom, and enterprise technology.',
        image1: '/assets/team/david-marek-1.jpg',
        image2: '/assets/team/david-marek-2.jpg',
    },
    {
        id: 2,
        name: 'TBA',
        role: 'Chief Technology Officer',
        bio: 'Expert in distributed systems and AI infrastructure. Leading the development of our core technological frameworks and innovation strategy.',
        image1: 'https://images.unsplash.com/photo-1544717297-fa154da09f5b?w=400&h=400&fit=crop',
        image2: 'https://images.unsplash.com/photo-1544717297-fa154da09f5b?w=400&h=400&fit=crop',
    },
    {
        id: 3,
        name: 'TBA',
        role: 'Software Engineer',
        bio: 'Full-stack expert specializing in scalable web applications and AI integration. Building high-performance solutions for our partners.',
        image1: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
        image2: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    },
    {
        id: 4,
        name: 'TBA',
        role: 'Software Engineer',
        bio: 'Full-stack expert specializing in scalable web applications and AI integration. Building high-performance solutions for our partners.',
        image1: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
        image2: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    },
    {
        id: 5,
        name: 'TBA',
        role: 'Software Engineer',
        bio: 'Full-stack expert specializing in scalable web applications and AI integration. Building high-performance solutions for our partners.',
        image1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        image2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
];

export default function Team() {
    const [activeImages, setActiveImages] = useState({});

    const toggleImage = (memberId) => {
        setActiveImages(prev => ({
            ...prev,
            [memberId]: !prev[memberId]
        }));
    };

    return (
        <div className="team-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <h1>Our Leadership</h1>
                        <p className="page-hero-subtitle">
                            Driving innovation through a deep understanding of technology,
                            business, and human-centered design. Join our journey as we
                            scale the future of vertical AI.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="section">
                <div className="container">
                    <div className="team-grid">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="team-card">
                                <button
                                    className="team-photo-wrapper"
                                    onClick={() => toggleImage(member.id)}
                                    aria-label={`Toggle photo of ${member.name}`}
                                >
                                    <div className={`team-photo ${activeImages[member.id] ? 'flipped' : ''}`}>
                                        <img
                                            src={member.image1}
                                            alt={member.name}
                                            className="photo-front"
                                            loading="lazy"
                                        />
                                        <img
                                            src={member.image2}
                                            alt={`${member.name} alternate`}
                                            className="photo-back"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="photo-hint">
                                        <span>Click to flip</span>
                                    </div>
                                </button>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                    <p className="team-bio">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="team-note">
                        <p>
                            Intentional polish and attention to detail—click the photo to reveal
                            an alternate perspective.
                        </p>
                    </div>
                </div>
            </section>

            {/* Join Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="join-content">
                        <h2>Work With Us</h2>
                        <p>
                            We&apos;re always looking for exceptional partners and builders who want to
                            create category-defining software. If you&apos;re passionate about
                            unlocking data&apos;s potential, we&apos;d love to hear from you.
                        </p>
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
