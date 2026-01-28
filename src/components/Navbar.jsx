import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/business', label: 'Business' },
    { path: '/focus-areas', label: 'Focus Areas' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/calculator', label: 'Cost Calculator' },
    { path: '/team', label: 'Team' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Drop</span>
          <span className="logo-text logo-accent">Dev</span>
        </Link>

        <nav className={`navbar-nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="btn btn-primary">
            Stay in Touch
          </Link>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'hamburger-open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
