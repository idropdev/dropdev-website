import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import DrippingOverlay from './DrippingOverlay';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [yellowMode, setYellowMode] = useState(false);
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

  // Apply yellow mode class to document for global styling
  useEffect(() => {
    if (yellowMode) {
      document.documentElement.classList.add('yellow-mode');
    } else {
      document.documentElement.classList.remove('yellow-mode');
    }
  }, [yellowMode]);

  const navLinks = [
    { path: '/business', label: 'Business' },
    { path: '/focus-areas', label: 'Focus Areas' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/calculator', label: 'Cost Calculator' },
    { path: '/team', label: 'Team' },
    { path: '/about', label: 'About' },
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/DropDev gradient (1).png" alt="DropDev" className="logo-image" />
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
            <button
              className={`yellow-mode-btn ${yellowMode ? 'active' : ''}`}
              onClick={() => setYellowMode(!yellowMode)}
              aria-label="Toggle yellow mode"
            >
              <span className="drip-icon">💧</span>
            </button>
            <ThemeToggle />
            <a href="tel:+19152341444" className="btn btn-primary">
              Stay in Touch
            </a>

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

      {/* Dripping Yellow Background */}
      <DrippingOverlay isActive={yellowMode} color="#f9ab00" />
    </>
  );
}
