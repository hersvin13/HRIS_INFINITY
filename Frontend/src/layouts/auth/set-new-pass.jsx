import React, { useState } from "react";
import BG from "../../assets/bg.jpg";
import logo from "../../assets/logo.png";
import "./styles/set-new-pass.css";
import { AiOutlineEye } from "react-icons/ai";

const SetNewPassword = ({ type, placeholder }) => {
  const [passVisible, setPassVisible] = useState(false);
  const togglePassVisibility = () => {
    setPassVisible(!passVisible);
  };
  return (
    <>
      <div className="login">
        <img
          src={BG}
          className="app-bg"
          alt="logo"
        />
        <div className="login-title">
          <img
            src={logo}
            className="logo"
            alt="logo"
          />
          <h1>HRIS</h1>
          <div className="login-form">
            <h2>Set new Password</h2>
            <input
              className="inputs"
              type={passVisible ? "text" : type}
              placeholder={placeholder}
            />
            {type === "password" && (
              <span
                className="eye-icon"
                onClick={togglePassVisibility}>
                {passVisible ? <AiOutlineEye /> : <AiOutlineEye />}
              </span>
            )}
            <input
              className="inputs"
              type="password"
              placeholder="Password"
            />

            <button
              className="submit"
              type="submit">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetNewPassword;
