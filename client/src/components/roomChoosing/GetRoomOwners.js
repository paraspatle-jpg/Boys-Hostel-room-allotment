import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const GetRoomOwners = (props) => {
  const requestSwap = (roomNo) => {
    console.log(props.user.token);
    axios
      .post(`http://localhost:5000/api/requestswap/${roomNo}`, {
        headers: { Authorization: "Bearer " + props.user.token },
      })
      .then((response) => {
        toast.success("Swap Requested Successfully");
        console.log(response.data);
      });
  };

  return (
    <div className="overflow-container">
      {props.owners.map((owner) => {
        return (
          <div className="getRoomOwners-flex-container">
            <div>{owner.name}</div>
            <div
              className="swap-request-button"
              onClick={() => requestSwap(owner.roomNumber)}
            >
              Request Swap
            </div>
          </div>
        );
      })}
    </div>
  );
};
