import React from "react";
import "../Css/signup.css";
import logo from "../Images/logo.png";

export const SignUpPage = () => {
  const handleCreateAccount = () => {
    console.log("Create Account button clicked");
  };

  return (
    <div className="sign-up-page">
      <div className="div">
        <div className="title">Sign up</div>
        <input className="rectangle" placeholder="First Name" type="text" />
        <input className="rectangle-2" placeholder="Last Name" type="text" />
        <input className="rectangle-3" placeholder="Email" type="email" />
        <input className="rectangle-4" placeholder="Password" type="password" />
        <div className="text-wrapper">First Name</div>
        <div className="text-wrapper-2">Email</div>
        <div className="text-wrapper-3">Password</div>
        <div className="text-wrapper-4">Last Name</div>
        <div className="addtask-btn">
          <button onClick={handleCreateAccount} className="overlap-group">Create Account</button>
        </div>
        <div className="overlap">
          <p className="username">Let's turn your to-do list into a to-done list together!</p>
          <img
            className="top-view-of-desk"
            alt="Top view of desk"
            src={logo}
          />
          <div className="title-2">TaskEase</div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
