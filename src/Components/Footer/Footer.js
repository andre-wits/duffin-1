import React from 'react';
import { FaCircleNotch } from 'react-icons/fa'; // Example icon (a tree, can be replaced)
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Large Business Name in the Background */}
      <div className="footer-business-name">Duffin Woodworks</div>

      {/* Icon */}
      <div className="footer-icon">
        <FaCircleNotch />
      </div>

      {/* Page Links */}
      <div className="footer-links">
        <a href="/" className="footer-link">
          Home
        </a>
        <a href="/products" className="footer-link">
          Products
        </a>
        <a href="/contact" className="footer-link">
          Contact
        </a>
        <a href="/ourshop" className="footer-link">
          Our Shop
        </a>
      </div>

      {/* Horizontal Line */}
      <hr className="footer-line" />

      {/* Rights Reserved Message */}
      <div className="footer-message">
        <p>
          © {new Date().getFullYear()} Duffin Woodworks. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
