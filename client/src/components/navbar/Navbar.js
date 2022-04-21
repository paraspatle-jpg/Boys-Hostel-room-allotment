import React from "react";
import { Link } from "react-router-dom";
import profile from "../image/profile.jpg";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-flex-box-container">
        <div className="student-details">
          <div>
            <img src={profile} alt="profile"></img>
          </div>
          <span className="roll-number">BT20CSE039</span>
        </div>
        <ul className="navbar-list">
          <li>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/admin-login"
            >
              Admin Login
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/register"
            >
              Register
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
};
