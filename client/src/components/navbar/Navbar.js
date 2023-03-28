import React from "react";
import { Link } from "react-router-dom";
import profile from "../image/profile.jpg";
import axios from "axios";
import "./Navbar.css";

export const Navbar = (props) => {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const logout = () => {
    localStorage.removeItem("user");
  };

  return (
    <div className="navbar-container">
      <div className="navbar-flex-box-container">
        <div className="student-details">
          <div>
            <img src={profile} alt="profile"></img>
          </div>
          {user ? (
            <span className="roll-number">{user?.user?.rollno}</span>
          ) : null}
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

          {user ? (
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                onClick={logout}
                to="/login"
              >
              Logout
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};
