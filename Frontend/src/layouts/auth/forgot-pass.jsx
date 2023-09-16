import React from "react";
import BG from "../../assets/bg.jpg";
import logo from "../../assets/logo.png";
import "./styles/forgot-pass.css";

const ForgotPassword = () => {
  return (
    <>
      <div className="forgot">
        <img
          src={BG}
          className="app-bg"
          alt="logo"
        />
        <div className="forgot-title">
          <img
            src={logo}
            className="logo"
            alt="logo"
          />
          <h1>HRIS</h1>
          <h2>Forgot Password?</h2>
          <h4>Don't worry. We can help.</h4>
          <div className="forgot-form">
            <input
              className="inputs"
              type="password"
              placeholder="Please fill in your email address"
            />
          </div>
        </div>
        <button
          className="submit"
          type="submit">
          Continue
        </button>
      </div>
    </>
  );
};

export default ForgotPassword;
