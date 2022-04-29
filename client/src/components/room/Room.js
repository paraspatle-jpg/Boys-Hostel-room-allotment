import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Room = ({ block, setOwners, setRoomSpace }) => {
  const handleClick = () => {
    setRoomSpace(block);
    toast.info("Getting Data, Please Wait...");
    axios
      .get(`http://localhost:5000/api/getroominfo/${block.roomNo}`)
      .then((response) => {
        setOwners(response.data);
        document.getElementById("room-choosing-heading").style.height = "220px";
        document.getElementById("room-choosing-toggled-content").style.display =
          "block";
      })
      .catch((error) => {
        toast.warning("Loading Failed...");
        document.getElementById("room-choosing-heading").style.height = "30px";
        document.getElementById("room-choosing-toggled-content").style.display =
          "none";
      });
  };
  return (
    <div className="room-block" onClick={handleClick}>
      {block.roomNo}
    </div>
  );
};
