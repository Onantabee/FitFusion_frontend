import React from "react";

const OverlayPanel = ({ isRightPanelActive, onLoginClick, onRegisterClick }) => (
  <div className="overlay-container">
    <div className="overlay">
      <div className="overlay-cover"></div>
      <div className={`overlay-panel overlay-left ${!isRightPanelActive && "active"}`}>
        <h1>Welcome Back!</h1>
        <p>If you already have an account, login here and stay connected.</p>
        <button className="ghost" onClick={onLoginClick}>Sign In</button>
      </div>
      <div className={`overlay-panel overlay-right ${isRightPanelActive && "active"}`}>
        <h1>Hello, Friend!</h1>
        <p>Join us today and start your journey with us.</p>
        <button className="ghost" onClick={onRegisterClick}>Sign Up</button>
      </div>
    </div>
  </div>
);

export default OverlayPanel;
