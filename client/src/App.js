import React from "react";
import "./App.css";
import {Navbar} from "./components/navbar/Navbar"
import {Footer} from "./components/footer/Footer"
import { Homepage } from "./pages/homepage/Homepage";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register.js";
import { AdminLogin } from "./pages/adminLogin/AdminLogin.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-flex-container">
      <Navbar/>
      <div className="body-container">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin-login" element={<AdminLogin />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      {/* <Footer/> */}
      </div>
      </div>
    </Router>
  );
}

export default App;
