import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router";
import { Navbar } from "../../components/navbar/Navbar";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isLogin, setIsLogin] = useState(localStorage.getItem("user"));

  const handleChange = (e) => {
    e.preventDefault();
    setUser((prevState) => {
      console.log(user);
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleClick = () => {
    axios
      .post("http://localhost:5000/api/login", user)
      .then((response) => {
        console.log(response.data);
        toast("Logged In sucessfully!");
        localStorage.setItem("user", JSON.stringify(response.data));
        setIsLogin(localStorage.getItem("user"));
      })
      .catch((error) => {
        toast("Login Failed!");
      });
  };
  if (isLogin) return <Navigate to="/" />;
  return (
    <>
    <div className="app-flex-container">
      <Navbar />
      <div className="body-container">
      <div className="login-container">
        <div className="header-container">Login</div>
        <div className="welcome-message">Welocme, Please Login Here...</div>
        <div className="login-form-container">
          <input
            onChange={handleChange}
            name="email"
            data-aos="fade-left"
            placeholder="Email"
            type="text"
          />
          <input
            onChange={handleChange}
            data-aos="fade-left"
            placeholder="Password"
            name="password"
            type="password"
          />
          <span onClick={handleClick} data-aos="fade-down">
            Submit
          </span>
        </div>
      </div>
      </div>
      </div>
      <ToastContainer />
    </>
  );
};
