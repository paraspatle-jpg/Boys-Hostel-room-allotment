import axios from "axios";
import React from "react";
import { Room } from "../room/Room";
import { SearchBar } from "../searchBar/SearchBar";
import { GetRoomOwners } from "./GetRoomOwners";
import { ToastContainer, toast } from "react-toastify";
import "./RoomChoosing.css";

export const RoomChoosing = (props) => {
  const rooms = [
    [
      { roomSpace: 0 },
      { roomSpace: 3, roomNo: 301 },
      { roomSpace: 3, roomNo: 302 },
      { roomSpace: 3, roomNo: 303 },
      { roomSpace: 3, roomNo: 304 },
      { roomSpace: 3, roomNo: 305 },
      { roomSpace: 3, roomNo: 306 },
      { roomSpace: 0 },
    ],
    [
      { roomSpace: 3, roomNo: 307 },
      { roomSpace: 3, roomNo: 308 },
      { roomSpace: 3, roomNo: 309 },
      { roomSpace: 3, roomNo: 310 },
      { roomSpace: 3, roomNo: 311 },
      { roomSpace: 3, roomNo: 312 },
      { roomSpace: 3, roomNo: 313 },
      { roomSpace: 3, roomNo: 314 },
    ],
    [
      { roomSpace: 3, roomNo: 315 },
      { roomSpace: 3, roomNo: 316 },
      { roomSpace: 0 },
      { roomSpace: 0 },
      { roomSpace: 0 },
      { roomSpace: 0 },
      { roomSpace: 3, roomNo: 317 },
      { roomSpace: 3, roomNo: 318 },
    ],
    [
      { roomSpace: 3, roomNo: 319 },
      { roomSpace: 3, roomNo: 320 },
      { roomSpace: 0 },
      { roomSpace: 0 },
      { roomSpace: 0 },
      { roomSpace: 0 },
      { roomSpace: 3, roomNo: 321 },
      { roomSpace: 3, roomNo: 322 },
    ],
    [
      { roomSpace: 3, roomNo: 323 },
      { roomSpace: 3, roomNo: 324 },
      { roomSpace: 3, roomNo: 325 },
      { roomSpace: 3, roomNo: 326 },
      { roomSpace: 3, roomNo: 327 },
      { roomSpace: 3, roomNo: 328 },
      { roomSpace: 3, roomNo: 329 },
      { roomSpace: 3, roomNo: 330 },
    ],
    [
      { roomSpace: 0 },
      { roomSpace: 3, roomNo: 331 },
      { roomSpace: 3, roomNo: 332 },
      { roomSpace: 3, roomNo: 333 },
      { roomSpace: 3, roomNo: 334 },
      { roomSpace: 3, roomNo: 335 },
      { roomSpace: 3, roomNo: 336 },
      { roomSpace: 0 },
    ],
  ];

  const [owners, setOwners] = React.useState();
  const [roomSpace, setRoomSpace] = React.useState();

  const getARoom = (roomNo) =>{
    console.log(roomSpace);
    axios.post(`http://localhost:5000/api/roomallotment/${roomNo}`, {
      headers: { Authorization: "Bearer " + props.user.token },
    }).then((response)=>{
      toast.success("Room Allotted Successfully!!")
    }).catch((error)=>{
      toast.warning("Loading Failed...");
    })
  }

  return (
    <div className="room-choosing-container">
      <div className="room-choosing-heading" id="room-choosing-heading">
        <div>Select A Room</div>
        <div id="room-choosing-toggled-content">
          {owners ? (
            <>
              <GetRoomOwners owners={owners} user={props.user} />
              {roomSpace.roomSpace - owners.length === 0 ? null : (
                <div className="room-space-left-container">
                  <div>
                    {console.log(roomSpace.roomSpace- owners.length)}
                    There are {roomSpace - owners.length} seats left in this room
                    click on the get the seat button to grab it.
                  </div>
                  <div className="grab-seat-button" onClick={()=>getARoom(roomSpace.roomNo)}>Get a Seat</div>
                </div>
              )}
            </>
          ) : null}
        </div>
      </div>
      <SearchBar />
      <div className="rooms">
        {rooms.map((room) => {
          return (
            <div>
              {room.map((block) => {
                if (block.roomSpace >= 1)
                  return (
                    <Room
                      setOwners={setOwners}
                      setRoomSpace={setRoomSpace}
                      block={block}
                    />
                  );
                return <div className="non-room-block"> &nbsp;</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
