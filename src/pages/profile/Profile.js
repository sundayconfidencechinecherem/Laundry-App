import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = ({ user, onLogin, onLogout }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  // ✅ Auto-load current session
  useEffect(() => {
    const sessionUser = JSON.parse(localStorage.getItem("currentUser"));
    if (sessionUser && !user) {
      onLogin(sessionUser);
    }
  }, [user, onLogin]);

  const handleInputChange = (e) => {
    setError("");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // ✅ Login
      const savedUser = JSON.parse(localStorage.getItem("laundryUser"));
      if (!savedUser) return setError("No account found. Please register.");
      if (savedUser.email !== formData.email)
        return setError("Email not found. Please register.");
      if (savedUser.password !== formData.password)
        return setError("Incorrect password.");

      localStorage.setItem("currentUser", JSON.stringify(savedUser));
      onLogin(savedUser);
    } else {
      // ✅ Register
      if (formData.password !== formData.confirmPassword) {
        return setError("Passwords do not match.");
      }

      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password, // ⚠️ demo only
      };

      localStorage.setItem("laundryUser", JSON.stringify(newUser));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      onLogin(newUser);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser"); // ✅ clear only session
    onLogout();
  };

  // ✅ Profile screen if logged in
  if (user) {
    return (
      <div className="profile-page container">
        <div className="profile-card">
          <h2>Your Profile</h2>

          <div className="profile-info">
            <div className="info-item">
              <span className="label">Name:</span>
              <span className="value">{user.name}</span>
            </div>

            <div className="info-item">
              <span className="label">Email:</span>
              <span className="value">{user.email}</span>
            </div>

            <div className="info-item">
              <span className="label">Member Since:</span>
              <span className="value">September 2025</span>
            </div>
          </div>

          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>
    );
  }

  // ✅ Auth screen
  return (
    <div className="profile-page container">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-full">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="auth-switch">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              className="link-button"
              onClick={() => {
                setError("");
                setIsLogin(!isLogin);
              }}
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
