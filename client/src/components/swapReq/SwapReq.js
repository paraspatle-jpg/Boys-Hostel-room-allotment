import React from "react";
import axios from "axios";
import { ArrowDown } from "../arrowDown/ArrowDown";
import { ToastContainer, toast } from "react-toastify";
import "./SwapReq.css";

export const SwapReq = (props) => {
  const [toggle, setToggle] = React.useState(false);
  const [swap, setSwap] = React.useState([]);

  const expand = () => {
    document.getElementById("swapreq-container").style.height = "200px";
    document.getElementById("toggled-swapreq-content").style.display = "block";
  };
  const shrink = () => {
    document.getElementById("swapreq-container").style.height = "30px";
    document.getElementById("toggled-swapreq-content").style.display = "none";
  };

  const toggleSwap = () => {
    if (!toggle) {
      setToggle(!toggle);
      if (props.user.user.admin === false) {
        axios
          .get(
            `http://localhost:5000/api/swaprequests/${props.user.user.roomNumber}`
          )
          .then((response) => {
            setSwap(response.data);
            expand();
          })
          .catch((error) => {
            toast.warning("Connect Failed !!");
            shrink();
          });
      } else {
        axios
          .get(`http://localhost:5000/api/pendingswap`, {
            headers: { Authorization: "Bearer " + props.user.token },
          })
          .then((response) => {
            setSwap(response.data);
            expand();
          })
          .catch((error) => {
            toast.warning("Connect Failed !!");
            shrink();
          });
      }
    } else {
      setToggle(!toggle);
      shrink();
    }
  };

  const swapRequest = (roomNo) => {
    axios
      .post(`http://localhost:5000/api/acceptswap/${roomNo}`, {
        headers: { Authorization: "Bearer " + props.user.token },
      })
      .then((response) => {
        toast.success("Swap Accepted...Will be Approved Soon");
      });
  };

  const approveSwap = (users) => {
    axios.post(
      `http://localhost:5000/api/approveswap`,
      {
        user1: users.user1,
        user2: users.user2,
      },
      {
        headers: { Authorization: "Bearer " + props.user.token },
      }
    ).then((response) => {
      console.log(response.data);
      toast.success("Swap Approved!!");
      shrink();
    }).catch((error) => {
      toast.error("Connection Failed !");
    })
  };

  return (
    <div className="swapreq-container" id="swapreq-container">
      <div className="visible-swap-req-content">
        <span onClick={toggleSwap}>
          Swap Requests &nbsp;
          <ArrowDown />
        </span>
      </div>
      <div id="toggled-swapreq-content">
        {swap.map((swapReq) => {
          return (
            <>
              {props.user.user.admin === false ? (
                <div className="toggled-swapreq-flex">
                  <div>{swapReq.name}</div>
                  <div>{swapReq.roomNumber}</div>
                  <div
                    className="accept-swap-btn"
                    onClick={() => swapRequest(swapReq.roomNumber)}
                  >
                    Accept Swap
                  </div>
                </div>
              ) : (
                <div className="toggled-swapreq-flex">
                  <div>{swapReq.user1.name}</div>
                  <div>{swapReq.user1.roomNumber}</div>
                  <div>{swapReq.user2.name}</div>
                  <div>{swapReq.user2.roomNumber}</div>
                  <div
                    className="accept-swap-btn"
                    onClick={() => approveSwap(swapReq)}
                  >
                    Approve Swap
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};
