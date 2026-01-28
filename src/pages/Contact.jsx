import { useState } from 'react';
import './Contact.css';

const inquiryTypes = [
    { id: 'pitch', label: 'Pitch an Idea', icon: '💡', description: 'Share your vision for a vertical AI or marketplace venture' },
    { id: 'partner', label: 'Partner', icon: '🤝', description: 'Explore strategic partnership opportunities' },
    { id: 'join', label: 'Join the Ecosystem', icon: '🌐', description: 'Become part of our portfolio or advisory network' },
    { id: 'other', label: 'Other', icon: '💬', description: 'General inquiries and information requests' },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        inquiryType: 'pitch',
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, this would send to an API
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="contact-page">
                <section className="page-hero">
                    <div className="container">
                        <div className="page-hero-content">
                            <h1>Thank You</h1>
                            <p className="page-hero-subtitle">
                                We&apos;ve received your message and will be in touch soon.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h2>Message Sent Successfully</h2>
                            <p>
                                Our team reviews every inquiry. For partnership and idea pitches,
                                expect a response within 2-3 business days.
                            </p>
                            <a href="/" className="btn btn-secondary">
                                Return Home
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <h1>Stay in Touch</h1>
                        <p className="page-hero-subtitle">
                            Have an idea worth building? Want to partner or join our ecosystem?
                            Let&apos;s talk.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section">
                <div className="container">
                    <div className="contact-layout">
                        <div className="contact-form-wrapper">
                            <form onSubmit={handleSubmit} className="contact-form">
                                {/* Inquiry Type */}
                                <div className="form-section">
                                    <h4>What brings you here?</h4>
                                    <div className="inquiry-types">
                                        {inquiryTypes.map((type) => (
                                            <label
                                                key={type.id}
                                                className={`inquiry-card ${formData.inquiryType === type.id ? 'selected' : ''}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="inquiryType"
                                                    value={type.id}
                                                    checked={formData.inquiryType === type.id}
                                                    onChange={handleChange}
                                                />
                                                <span className="inquiry-icon">{type.icon}</span>
                                                <span className="inquiry-label">{type.label}</span>
                                                <span className="inquiry-desc">{type.description}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className="form-section">
                                    <h4>Your Details</h4>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="name">Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-input"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-input"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="company">Company / Organization</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="form-input"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your company name (optional)"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="form-section">
                                    <h4>Your Message</h4>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="message">
                                            {formData.inquiryType === 'pitch'
                                                ? 'Tell us about your idea *'
                                                : 'How can we help? *'}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-textarea"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder={
                                                formData.inquiryType === 'pitch'
                                                    ? 'Describe your vision, the problem you\'re solving, and why now...'
                                                    : 'Share what\'s on your mind...'
                                            }
                                            rows="6"
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg submit-btn">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="info-card">
                                <h4>Direct Contact</h4>
                                <div className="info-item">
                                    <span className="info-icon">📧</span>
                                    <div className="info-content">
                                        <strong>Email</strong>
                                        <a href="mailto:hello@dropdev.io">hello@dropdev.io</a>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">📍</span>
                                    <div className="info-content">
                                        <strong>Location</strong>
                                        <span>San Francisco, CA</span>
                                    </div>
                                </div>
                            </div>

                            <div className="info-card">
                                <h4>Response Times</h4>
                                <ul className="response-times">
                                    <li>
                                        <span>Idea Pitches</span>
                                        <span>2-3 business days</span>
                                    </li>
                                    <li>
                                        <span>Partnerships</span>
                                        <span>1-2 business days</span>
                                    </li>
                                    <li>
                                        <span>General</span>
                                        <span>3-5 business days</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h4>Connect</h4>
                                <div className="social-links">
                                    <a href="https://twitter.com/dropdev" target="_blank" rel="noopener noreferrer" className="social-link">
                                        Twitter
                                    </a>
                                    <a href="https://linkedin.com/company/dropdev" target="_blank" rel="noopener noreferrer" className="social-link">
                                        LinkedIn
                                    </a>
                                    <a href="https://github.com/dropdev" target="_blank" rel="noopener noreferrer" className="social-link">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
