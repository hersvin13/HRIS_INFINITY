import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../link";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import BG from "../assets/bg.jpg";
import logo from "../assets/logo.png";
import "./styles/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const router = Router()

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    axios
      .post(BASE_URL + "/user/login", { username, password })
      .then((response) => {
        console.log(response.data);

        swal("Login Successful", "Welcome Back", "success").then(() => {
          navigate("/dashboard");
        });
      })
      .catch((error) => {
        swal(
          "Invalid Credentials!",
          "Please check your username or password",
          "error"
        );
        console.error(error.response.data);
      });
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
          <form onSubmit={handleLogin}>
            {" "}
            {/* Wrap the form around your input elements */}
            <div className="login-form">
              <input
                className="inputs"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className="inputs"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="for-rem">
                <div className="remember">
                  <input
                    className="remember"
                    type="checkbox"
                  />
                  <label htmlFor="">Remember Me</label>
                </div>
                <div>
                  <a href="#forgot-pass">Forgot Password?</a>
                </div>
              </div>
              <button
                className="submit"
                type="submit">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
