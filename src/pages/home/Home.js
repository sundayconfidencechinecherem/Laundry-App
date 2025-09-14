// pages/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <h1>Neche's Laundry Service</h1>
          <p>We pick up, clean, and deliver your laundry with care and precision</p>
          <Link to="/services" className="btn btn-primary btn-large">
            Book Now
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="features">
          <h2>How It Works</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">1</div>
              <h3>Schedule Pickup</h3>
              <p>Book a pickup time through our app or website</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">2</div>
              <h3>We Pick Up</h3>
              <p>Our professional driver collects your laundry</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">3</div>
              <h3>We Clean</h3>
              <p>Your clothes are cleaned with utmost care</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">4</div>
              <h3>Delivery</h3>
              <p>We deliver your fresh clothes within 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <p>Founded in 2020, Neche's Laundry Service began with a simple mission: to provide busy individuals and families with premium laundry care that saves time and delivers exceptional results.</p>
              <p>What sets us apart is our attention to detail, eco-friendly cleaning methods, and commitment to treating every garment as if it were our own. We use only high-quality, hypoallergenic detergents and state-of-the-art equipment to ensure your clothes look their best and last longer.</p>
              <div className="about-stats">
                <div className="stat">
                  <h3>10,000+</h3>
                  <p>Happy Customers</p>
                </div>
                <div className="stat">
                  <h3>98%</h3>
                  <p>Customer Satisfaction</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>Customer Support</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/images/laundryteam.jpg" alt="Neche's Laundry Team" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;