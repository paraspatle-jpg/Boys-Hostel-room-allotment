import React from "react";
import "./Notice.css";

export const Notice = () => {
  const [toggle, setToggle] = React.useState(false);
  const toggleNotice = () => {
    if (!toggle) {
      setToggle(!toggle);
      document.getElementById("notice-container").style.height = "100px";
      document.getElementById("toggled-content").style.display = "block";
    } else {
      setToggle(!toggle);
      document.getElementById("notice-container").style.height = "30px";
      document.getElementById("toggled-content").style.display = "none";
    }
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
      </div>
      <div id="toggled-content">
        Lorem ipsum dolor sit amet, congue<br></br>Paras
      </div>
    </div>
  );
};
