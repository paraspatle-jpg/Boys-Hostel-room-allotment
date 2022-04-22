import React from "react";
import "./Homepage.css";

export const Homepage = () => {
  const [toggle, setToggle] = React.useState(false);
  const toggleNotice = () => {
    if (!toggle) {
      setToggle(!toggle);
      //document.getElementById("notice-container").style.height = "100px";
      document.getElementById("toggled-content").style.display = "";
    } else {
      setToggle(!toggle);
     // document.getElementById("notice-container").style.height = "auto";
      document.getElementById("toggled-content").style.display = "none";
    }
  };

  return (
    <div className="homepage-container">
      <div className="header-container">Home Page</div>
      <div className="notice-container" id="notice-container">
        <div className="visible-content">
          <span>Notice</span>
          <button onClick={toggleNotice}>Toggle</button>
        </div>
        <div id="toggled-content">Lorem ipsum dolor sit amet, congue</div>
      </div>
    </div>
  );
};
