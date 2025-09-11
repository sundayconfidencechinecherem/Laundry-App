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
    </div>
  );
};

export default Home;