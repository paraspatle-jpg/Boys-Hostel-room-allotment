import React from "react";

export const Room = ({block}) => {
    const handleClick =()=> {
        document.getElementById("room-choosing-heading").style.height = "100px";
    }
  return (
    <div className="room-block" onClick={handleClick}>
      {block.roomNo}
    </div>
  );
};
