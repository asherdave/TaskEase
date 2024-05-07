import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "../Css/signup.css";
import logo from "../Images/logo.png";

export const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    eMail: '',
    pWord: ''
  });
  const [error, setError] = useState(''); // State to store error message
  const navigate = useNavigate(); // Hook to handle navigation

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/user/insertUser', formData)
      .then(response => {
        console.log('Account created: ', response);
        navigate('/'); // Redirect to the login page on success
      })
      .catch(error => {
        console.error('Error creating account: ', error);
        setError('Failed to create account. Please try again.'); // Set error message on failure
      });
  };

  return (
    <form className="sign-up-page" onSubmit={handleCreateAccount}>
      <div className="div">
        <div className="title">Sign up</div>
        <input className="rectangle" name="lName" placeholder="Last Name" type="text" onChange={handleChange} />
        <input className="rectangle-2" name="fName" placeholder="First Name" type="text" onChange={handleChange} />
        <input className="rectangle-3" name="eMail" placeholder="Email" type="email" onChange={handleChange} />
        <input className="rectangle-4" name="pWord" placeholder="Password" type="password" onChange={handleChange} />
        <div className="text-wrapper">First Name</div>
        <div className="text-wrapper-2">Email</div>
        <div className="text-wrapper-3">Password</div>
        <div className="text-wrapper-4">Last Name</div>
        <div className="addtask-btn">
          <button type="submit" className="overlap-group">Create Account</button>
        </div>
        {error && <div className="error-message">{error}</div>} {/* Display error message if any */}
        <div className="overlap">
          <p className="username">Let's turn your to-do list into a to-done list together!</p>
          <img className="top-view-of-desk" alt="Top view of desk" src={logo} />
          <div className="title-2">TaskEase</div>
        </div>
      </div>
    </form>
  );
};

export default SignUpPage;
