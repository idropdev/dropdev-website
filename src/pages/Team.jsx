import { useState } from 'react';
import './Team.css';

const teamMembers = [
    {
        id: 1,
        name: 'Alex Chen',
        role: 'Founder & CEO',
        bio: 'Former engineering lead at Google. Built and scaled products used by millions. Obsessed with vertical AI applications.',
        image1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        image2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        role: 'Chief Technology Officer',
        bio: 'Ex-Amazon principal engineer. Deep expertise in distributed systems and machine learning infrastructure.',
        image1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
        image2: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    },
    {
        id: 3,
        name: 'Marcus Williams',
        role: 'Chief Design Officer',
        bio: 'Previously design director at Stripe. Passionate about creating products that feel inevitable.',
        image1: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
        image2: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face',
    },
    {
        id: 4,
        name: 'Emily Park',
        role: 'Head of Strategy',
        bio: 'Former McKinsey partner specializing in tech ventures. Brings rigorous analytical frameworks to opportunity assessment.',
        image1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
        image2: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    },
    {
        id: 5,
        name: 'David Kim',
        role: 'Head of Engineering',
        bio: 'Built engineering teams at three unicorn startups. Expert in scaling from 0 to 1 and beyond.',
        image1: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
        image2: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    },
    {
        id: 6,
        name: 'Rachel Torres',
        role: 'Head of Product',
        bio: 'Former VP Product at Notion. Deep understanding of what makes products that users love.',
        image1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
        image2: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
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
                        <h1>Our Team</h1>
                        <p className="page-hero-subtitle">
                            A collective of builders, designers, and strategists who&apos;ve scaled
                            products at the world&apos;s best companies. Click any photo to see
                            a different side.
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
                            Every team photo is interactive—click to reveal an alternate image.
                            This demonstrates intentional polish and attention to detail.
                        </p>
                    </div>
                </div>
            </section>

            {/* Join Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="join-content">
                        <h2>Join the Team</h2>
                        <p>
                            We&apos;re always looking for exceptional talent who want to build
                            category-defining companies. If you&apos;re passionate about vertical AI
                            and marketplace ecosystems, we&apos;d love to hear from you.
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
