import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Cart from './pages/cart/Cart';
import Orders from './pages/order/Order';
import Profile from './pages/profile/Profile';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const addToCart = (service) => {
    setCart([...cart, { ...service, quantity: 1 }]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const placeOrder = (orderDetails) => {
    const newOrder = {
      id: orders.length + 1,
      date: new Date().toLocaleDateString(),
      items: [...cart],
      status: 'Pending',
      total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      ...orderDetails
    };
    
    setOrders([...orders, newOrder]);
    setCart([]);
  };

  return (
    <Router>
      <div className="App">
        <Header user={user} cartCount={cart.length} onLogout={handleLogout} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services addToCart={addToCart} />} />
            <Route path="/cart" element={
              <Cart 
                cart={cart} 
                removeFromCart={removeFromCart} 
                placeOrder={placeOrder}
                user={user}
              />
            } />
            <Route path="/orders" element={<Orders orders={orders} />} />
            <Route path="/profile" element={
              <Profile 
                user={user} 
                onLogin={handleLogin} 
                onLogout={handleLogout} 
              />
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;