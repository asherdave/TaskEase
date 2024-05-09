import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Css/login.css";


export const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', pWord: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    try {
      const response = await axios.post('http://localhost:8080/user/login', credentials);
      console.log('Login response:', response.data);
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
      console.error('Error logging in:', err);
    }
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
              <form className="login-form" onSubmit={handleSignIn}>
                <div className="input-group">
                  <input
                    className="username-input"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    onChange={handleChange}
                    value={credentials.email}
                  />
                  <input
                    className="password-input"
                    name="pWord"
                    placeholder="Enter your password"
                    type="password"
                    onChange={handleChange}
                    value={credentials.pWord}
                  />
                </div>
                <button className="login-button" type="submit">
                  <div className="button-text">Sign In</div>
                </button>
                {error && <div className="error-message">{error}</div>}
                <p className="account-options">
                  <span className="plain-text">Don’t have an account? Create </span>
                  <span className="link-text" onClick={handleNavigateToSignup}>here</span>
                  <span className="plain-text">.</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
