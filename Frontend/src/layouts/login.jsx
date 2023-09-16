import React, { useState, useEffect } from "react";
import BG from "../assets/bg.jpg";
import logo from "../assets/logo.png";
import "./styles/login.css";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const users = [{ email: "test@example.com", password: "password123" }];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Login successful!");
      console.log("Email:", formValues.email);
      console.log("Password:", formValues.password);
      // You can navigate to the next page or display a success message here
    }
  };

  const validate = (values) => {
    const errors = {};
    const user = users.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (!user) {
      errors.password = "The email or password provided is incorrect";
    }

    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  return (
    <>
      <div className="login">
        <img
          src={BG}
          className="app-bg"
          alt="background"
        />
        <div className="login-title">
          <img
            src={logo}
            className="logo"
            alt="logo"
          />
          <h1>HRIS</h1>
          <form onSubmit={handleSubmit}>
            <div className="login-form">
              <div className="field">
                <input
                  className="inputs"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.email}</p>
              <div className="field">
                <input
                  className="inputs"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
