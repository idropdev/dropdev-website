import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand & Mission */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span className="logo-text">Drop</span>
                            <span className="logo-text logo-accent">Dev</span>
                        </Link>
                        <p className="footer-mission">
                            Building the next generation of category-defining companies through
                            vertical AI SaaS and community-centric marketplace ecosystems.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4 className="footer-heading">Studio</h4>
                        <nav className="footer-nav">
                            <Link to="/business">Business</Link>
                            <Link to="/focus-areas">Focus Areas</Link>
                            <Link to="/portfolio">Portfolio</Link>
                            <Link to="/calculator">Cost Calculator</Link>
                        </nav>
                    </div>

                    {/* Company */}
                    <div className="footer-links">
                        <h4 className="footer-heading">Company</h4>
                        <nav className="footer-nav">
                            <Link to="/team">Team</Link>
                            <Link to="/about">About</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="footer-links">
                        <h4 className="footer-heading">Connect</h4>
                        <nav className="footer-nav">
                            <a href="https://www.linkedin.com/company/dropdev/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="mailto:info@dropdev.co">info@dropdev.co</a>
                        </nav>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} DropDev. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
