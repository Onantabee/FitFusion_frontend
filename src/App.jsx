import React, { useState } from "react";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleRegisterClick = () => {
    setIsRightPanelActive(true);
  };

  const handleLoginClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div
      className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}
      id="container"
    >
      {/* Register Form */}
      <div className="form-container register-container">
        <form>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration:</span>
          <div className="input-container">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-container">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <button>Sign Up</button>
        </form>
      </div>

      {/* Login Form */}
      <div className="form-container login-container">
        <form>
          <h1>Sign In</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account:</span>
          <div className="input-container">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <a href="#" className="pass-link">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>

      {/* Overlay Panels */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>If you already have an account, login here and stay connected.</p>
            <button className="ghost" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Join us today and start your journey with us.</p>
            <button className="ghost" onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
