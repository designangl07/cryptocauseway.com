// components/header.js
import React, { useState } from 'react';
import Link from 'next/link';

const Header = ({ openPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to handle the "Donate Now" button click
  const handleDonateClick = (event) => {
    event.stopPropagation(); // Prevent closing the menu when the button is clicked
    closeMenu(); // Close the menu when the button is clicked
    openPopup(); // Open the popup as usual
  };

  // Toggle menu open/close on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <img src="/crypto-logo.svg" alt="Logo" height="40" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu} // Toggle the menu on button click
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/crypto-donators" className="nav-link" onClick={closeMenu}>
               Donators
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/crypto-launchers" className="nav-link" onClick={closeMenu}>
              Launchers
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={handleDonateClick} // Close menu and show popup
                className="btn nav-link"
              >
                Donate Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;