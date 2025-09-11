// pages/Services/Services.js
import React from 'react';
import ServiceCard from '../../components/servicecard/ServiceCard';
import './Services.css';

const Services = ({ addToCart }) => {
  const services = [
    { 
      id: 1, 
      name: 'Wash & Fold', 
      price: 1800, 
      unit: 'kg', 
      description: 'Professional washing and careful folding of your everyday clothes',
      image: '/images/4.avif'
    },
    { 
      id: 2, 
      name: 'Dry Cleaning', 
      price: 1500, 
      unit: 'item', 
      description: 'Specialized cleaning for delicate fabrics and business attire',
      image: '/images/3.avif'
    },
    { 
      id: 3, 
      name: 'Ironing', 
      price: 2000, 
      unit: 'item', 
      description: 'Professional ironing services for wrinkle-free clothes',
      image: '/images/2.avif'
    },
    { 
      id: 4, 
      name: 'Stain Removal', 
      price: 3000, 
      unit: 'item', 
      description: 'Special treatment for stubborn stains on any fabric',
      image: '/images/5.avif'
    },
    { 
      id: 5, 
      name: 'Shoe Cleaning', 
      price: 2500, 
      unit: 'pair', 
      description: 'Expert cleaning and polishing for your footwear',
      image: '/images/6.avif'
    },
    { 
      id: 6, 
      name: 'Blanket Cleaning', 
      price: 1000, 
      unit: 'item', 
      description: 'Gentle cleaning for blankets and comforters',
      image: '/images/7.avif'
    },
  ];

  return (
    <div className="services-page container">
      <h2>Our Services</h2>
      <p className="page-description">Choose from our professional laundry services</p>
      
      <div className="services-grid">
        {services.map(service => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
