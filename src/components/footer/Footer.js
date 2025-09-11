// components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Neche's Laundry</h3>
            <p>Professional laundry service delivered to your doorstep. Quality, convenience, and reliability.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/cart">Cart</a></li>
              <li><a href="/profile">Profile</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 34 Nike Rd,Enugu State</li>
              <li><i className="fas fa-phone"></i> +234 906 888 9098</li>
              <li><i className="fas fa-envelope"></i> info@nicheslaundry.com</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 NechesLaundry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;