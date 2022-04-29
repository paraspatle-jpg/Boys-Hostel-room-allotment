import React from "react";
import { Notice } from "../../components/notice/Notice";
import { SwapReq } from "../../components/swapReq/SwapReq";
import { RoomChoosing } from "../../components/roomChoosing/RoomChoosing";
import { Navbar } from "../../components/navbar/Navbar";
import { Navigate } from "react-router";
import "./Homepage.css";

export const Homepage = () => {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="app-flex-container">
      <Navbar />
      <div className="body-container">
        <div className="homepage-container">
          <div className="header-container">Home Page</div>
          <Notice user={user} />
          <SwapReq user={user} />
          <RoomChoosing user={user} />
        </div>
      </div>
    </div>
  );
};
