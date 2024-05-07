import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/login.css";

export const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log("Sign-In button clicked");
  };

  const handleNavigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <div className="background-wrapper">
        <div className="background-image">
          <div className="login-box">
            <div className="login-content">
              <div className="login-title">
                <div className="title-text">Task Ease</div>
                <p className="subtitle-text">Start organizing your life day by day</p>
              </div>
              <div className="login-form">
                <div className="input-group">
                  <input className="username-input" id="username-input" placeholder="Enter your username" type="text" />
                  <input className="password-input" id="password-input" placeholder="Enter your password" type="password" />
                </div>
                <button className="login-button" onClick={handleSignIn}>
                  <div className="button-text">Sign In</div>
                </button>
                <p className="account-options">
                  <span className="plain-text">Don’t have an account? Create </span>
                  <span className="link-text" onClick={handleNavigateToSignup}>here</span>
                  <span className="plain-text">.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
