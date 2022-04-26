import React from "react";
import { Notice } from "../../components/notice/Notice";
import { SwapReq } from "../../components/swapReq/SwapReq";
import { RoomChoosing } from "../../components/roomChoosing/RoomChoosing";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="header-container">Home Page</div>
      <Notice />
      <SwapReq />
      <RoomChoosing/>
    </div>
  );
};
