// components/Header/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ user, cartCount, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // close menu on link click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={handleLinkClick}>
            <img src="/images/logo.png" alt="logo" width="50" />
          </Link>

          {/* Hamburger button */}
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            <Link to="/services" onClick={handleLinkClick}>Services</Link>
            <Link to="/cart" onClick={handleLinkClick}>Cart {cartCount}</Link>
            <Link to="/orders" onClick={handleLinkClick}>Orders</Link>
            <Link className="log" to="/profile" onClick={handleLinkClick}>
              {user ? 'Profile' : 'Login'}
            </Link>
            {user && (
              <button onClick={() => { onLogout(); setMenuOpen(false); }} className="btn btn-outline">
                Logout
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
