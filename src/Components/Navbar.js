import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCircleNotch,
} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  // State to track the currently active link
  const [activeLink, setActiveLink] = useState('');

  // Function to handle link clicks
  const handleClick = (linkName) => {
    setActiveLink(linkName); // Update the active link
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <NavLink
            to="/"
            className="nav-link"
            onClick={() => handleClick('home')}
          >
            Home
            {activeLink === 'home' && <span className="arrow">→</span>}
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
            onClick={() => handleClick('about')}
          >
            About
            {activeLink === 'about' && <span className="arrow">→</span>}
          </NavLink>
          <NavLink
            to="/products"
            className="nav-link"
            onClick={() => handleClick('products')}
          >
            Products
            {activeLink === 'products' && <span className="arrow">→</span>}
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link"
            onClick={() => handleClick('contact')}
          >
            Contact
            {activeLink === 'contact' && <span className="arrow">→</span>}
          </NavLink>
        </div>
        <div className="navbar-logo">
          <NavLink to="/" className="navbar-logo">
            — DuffinWoodworks —
          </NavLink>
        </div>
        <div className="navbar-right">
          <a
            href="#"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
