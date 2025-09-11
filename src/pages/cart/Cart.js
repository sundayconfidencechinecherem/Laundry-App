import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, removeFromCart, placeOrder, user }) => {
  const [checkout, setCheckout] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loginNotice, setLoginNotice] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    phone: "",
    pickupDate: "",
    deliveryDate: "",
  });

  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      setLoginNotice(true);
      return;
    }
    if (!cart.length) return;

    placeOrder(orderDetails);
    setCheckout(false);
    setSuccess(true);
  };

  // auto-redirect after 20s if login notice is shown
  useEffect(() => {
    if (loginNotice) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [loginNotice, navigate]);

  return (
    <div className="cart-page container">
      <h2>Your Cart</h2>

      {/* Login Notice */}
      {loginNotice && (
        <p className="login-notice">
          ⚠️ You must be logged in to place an order. Redirecting to login page
          in <strong>20 seconds...</strong>
        </p>
      )}

      {/* Empty */}
      {!cart.length ? (
        <div className="empty-cart">
          <i className="fas fa-shopping-cart"></i>
          <p>Your cart is empty</p>
          <Link to="/services" className="btn btn-primary">
            Browse Services
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          {/* Cart Items */}
          <div className="cart-items">
            {cart.map((item, i) => (
              <div className="cart-item" key={i}>
                <div>
                  <h4>{item.name}</h4>
                  <p>
                    ₦{item.price}/{item.unit}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(i)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <h3>Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span> <span>₦{total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span> <span>₦3000</span>
            </div>
            <div className="summary-row total">
              <span>Total</span> <span>₦{(total + 3000).toFixed(2)}</span>
            </div>
            <button
              className="btn btn-primary btn-large"
              onClick={() => setCheckout(true)}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Checkout */}
      {checkout && (
        <div className="overlay">
          <div className="overlay-box">
            <button className="close-btn" onClick={() => setCheckout(false)}>
              ×
            </button>
            <h3>Delivery Information</h3>
            <form onSubmit={handleSubmit} className="checkout-form">
              <input
                name="name"
                placeholder="Full Name"
                value={orderDetails.name}
                onChange={handleChange}
                required
              />
              <textarea
                name="address"
                placeholder="Address"
                value={orderDetails.address}
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                placeholder="Phone"
                value={orderDetails.phone}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="pickupDate"
                value={orderDetails.pickupDate}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="deliveryDate"
                value={orderDetails.deliveryDate}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-primary btn-large">
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Screen */}
      {success && (
        <div className="overlay">
          <div className="success-box">
            <i className="fas fa-check-circle"></i>
            <h3>Order Placed!</h3>
            <p>Your laundry will be picked up as scheduled.</p>
            <button
              onClick={() => {
                setSuccess(false);
                navigate("/");
              }}
              className="btn btn-primary"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
