import React from "react";
import BG from "../../assets/bg.jpg";
import logo from "../../assets/logo.png";
import "./styles/verification.css";

const OTPVerification = () => {
  return (
    <>
      <div className="verification">
        <img
          src={BG}
          className="app-bg"
          alt="logo"
        />
        <div className="verification-title">
          <img
            src={logo}
            className="logo"
            alt="logo"
          />
          <h1>HRIS</h1>
          <h2>OTP Verification</h2>
          <h4>Enter the OTP sent to " "</h4>
          <div className="verification-form">
            <input
              className="inputs"
              type="password"
              placeholder=" "
            />
            <input
              className="inputs"
              type="password"
              placeholder=" "
            />
            <input
              className="inputs"
              type="password"
              placeholder=" "
            />
            <input
              className="inputs"
              type="password"
              placeholder=" "
            />
          </div>{" "}
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

export default OTPVerification;
