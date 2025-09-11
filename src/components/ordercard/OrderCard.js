// components/OrderCard/OrderCard.js
import React from 'react';
import './OrderCard.css';

const OrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <div className="order-header">
        <h3>Order #{order.id}</h3>
        <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
      </div>
      
      <div className="order-details">
        <div className="detail">
          <span className="label">Order Date:</span>
          <span className="value">{order.date}</span>
        </div>
        
        <div className="detail">
          <span className="label">Pickup Date:</span>
          <span className="value">{order.pickupDate}</span>
        </div>
        
        <div className="detail">
          <span className="label">Delivery Date:</span>
          <span className="value">{order.deliveryDate}</span>
        </div>
        
        <div className="detail">
          <span className="label">Items:</span>
          <span className="value">{order.items.length}</span>
        </div>
        
        <div className="detail">
          <span className="label">Total:</span>
          <span className="value">${order.total.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="order-address">
        <span className="label">Delivery Address:</span>
        <p>{order.address}</p>
      </div>
    </div>
  );
};

export default OrderCard;