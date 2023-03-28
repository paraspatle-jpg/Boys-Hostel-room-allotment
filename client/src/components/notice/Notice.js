import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { GetNotice } from "./GetNotice";
import "./Notice.css";
import axios from "axios";

export const Notice = (props) => {
  const [toggle, setToggle] = React.useState(false);
  const [notice, setNotice] = React.useState([]);
  const [newNotice, setNewNotice] = React.useState();
  const toggleNotice = () => {
    if (!toggle) {
      toast.info("Getting Posts !!");
      setToggle(!toggle);
      axios
        .get("http://localhost:5000/api/notice")
        .then((response) => {
          setNotice(response?.data?.notices);
        })
        .catch((error) => {
          toast.warning("Connect Failed !!");
          setToggle(!toggle);
          document.getElementById("notice-container").style.height = "35px";
          document.getElementById("toggled-content").style.display = "none";
        });
      document.getElementById("notice-container").style.height = "200px";
      document.getElementById("toggled-content").style.display = "block";
    } else {
      setToggle(!toggle);
      document.getElementById("notice-container").style.height = "35px";
      document.getElementById("toggled-content").style.display = "none";
    }
  };

  const handleChange = (e) => {
    setNewNotice(e.target.value);
  };

  const addNotice = () => {
    axios
      .post("http://localhost:5000/api/notice", { notice: newNotice })
      .then((response) => {
        toast.success("Notice Posted Successfully!!");
        console.log(response?.data);
      })
      .catch((error) => {
        toast.error("Notice Posting failed!!");
      });
  };

  return (
    <div className="notice-container" id="notice-container">
      <div className="visible-content">
        <span onClick={toggleNotice}>
          Notices &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        {props?.user?.user?.admin === true ?(<div>
          <input
            onChange={handleChange}
            className="add-notice-input"
            type="text"
            placeholder="Enter the content of the notice.."
          ></input>
          <div className="post-btn" onClick={addNotice}>
            Post
          </div>
        </div>):null}
        
      </div>
      <div id="toggled-content">
        <GetNotice notice={notice} user={props?.user} setNotice={setNotice} />
      </div>
    </div>
  );
};
