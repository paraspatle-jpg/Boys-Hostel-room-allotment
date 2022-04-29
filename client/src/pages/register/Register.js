import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { Navbar } from "../../components/navbar/Navbar";
import "./Register.css";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    rollno: "",
    name: "",
  });
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
    toast("You are being Registered");
    axios
      .post("http://localhost:5000/api/register", user)
      .then((response) => {
        console.log(response.data);
        //store user from here
        localStorage.setItem("user", JSON.stringify(response.data));
        setIsLogin(localStorage.getItem("user"));
        toast("Registered Successfully!!");
      })
      .catch((err) => {
        toast("Registeration Failed !!");
      });
  };
  if (isLogin) return <Navigate to="/" />;
  return (
    <>
    <div className="app-flex-container">
      <Navbar />
      <div className="body-container">
      <div className="login-container">
        <div className="header-container">Register</div>
        <div className="welcome-message">Welcome, Please Register Here...</div>
        <div className="register-form-container">
          <input
            onChange={handleChange}
            name="name"
            data-aos="fade-left"
            placeholder="Name"
            type="text"
          />
          <input
            onChange={handleChange}
            name="rollno"
            data-aos="fade-left"
            placeholder="Roll number"
            type="text"
          />
          <input
            onChange={handleChange}
            name="email"
            data-aos="fade-left"
            placeholder="College Mail Id"
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
