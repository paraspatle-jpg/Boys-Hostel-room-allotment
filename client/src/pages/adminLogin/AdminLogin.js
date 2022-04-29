import React, { useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";

export const AdminLogin = () => {
  const [user, setUser] = useState({ email: "", password: "" });

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

  const handleClick = () => {};
  return (
    <>
      <div className="app-flex-container">
        <Navbar />
        <div className="body-container">
          <div className="login-container">
            <div className="header-container">Admin Login</div>
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
    </>
  );
};
