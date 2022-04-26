import React from "react";
import { Room } from "../room/Room";
import {SearchBar} from "../searchBar/SearchBar";
import "./RoomChoosing.css";

export const RoomChoosing = () => {
  const rooms = [
    [
      { roomSpace: 0 },
      { roomSpace: 3, roomNo: 303 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 0 },
    ],
    [
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
    ],
    [
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 0 },
      { roomSpace: 0 },
      { roomSpace: 0 },
      { roomSpace: 0 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
    ],
    [
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 0 },
      { roomSpace: 0 },
      { roomSpace: 0 },
      { roomSpace: 0 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
    ],
    [
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
    ],
    [
      { roomSpace: 0 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 0 },
    ],
  ];

  const handleClick = (roominfo) => {};
  return (
    <div className="room-choosing-container">
      <div className="room-choosing-heading" id = "room-choosing-heading">
        <div>Choose A Room</div>
        <div id="room-choosing-toggled-content"></div>
      </div>
      <SearchBar/>
      <div className="rooms">
        {rooms.map((room) => {
          return (
            <div>
              {room.map((block) => {
                if (block.roomSpace >= 1) return <Room block={block} />;
                if (block.roomSpace === 0)
                  return <div className="non-room-block"> &nbsp;</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
