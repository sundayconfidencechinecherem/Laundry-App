// pages/Orders/Orders.js
import React from 'react';
import OrderCard from '../../components/ordercard/OrderCard';
import './Order.css';

const Orders = ({ orders }) => {
  return (
    <div className="orders-page container">
      <h2>Your Orders</h2>
      
      {orders.length === 0 ? (
        <div className="empty-orders">
          <i className="fas fa-clipboard-list"></i>
          <p>You have no orders yet</p>
          <a href="/services" className="btn btn-primary">Browse Services</a>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;