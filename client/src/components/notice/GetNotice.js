import axios from "axios";
import React from "react";

export const GetNotice = ({ notice, setNotice }) => {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/notice/${id}`).then((response) => {
      console.log(response.data);
      axios.get("http://localhost:5000/api/notice").then((res) => {
        console.log(res.data.notices);
        setNotice(res.data.notices);
      });
    });
  };

  return notice.map((notices) => {
    return (
      <div className="paras">
        <div>{notices.notice}</div>
        <div
          className="delete-btn"
          onClick={() => {
            handleDelete(notices._id);
          }}
        >
          Delete
        </div>
      </div>
    );
  })
};
