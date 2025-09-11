// components/servicecard/ServiceCard.js
import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service, onAddToCart }) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={service.image} alt={service.name} />
      </div>
      <div className="service-content">
        <h3>{service.name}</h3>
        <p className="service-description">{service.description}</p>
        <p className="service-price">
          <span>₦{service.price}</span> / {service.unit}
        </p>
        <button 
          className="btn btn-primary"
          onClick={() => onAddToCart(service)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
