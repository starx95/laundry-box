import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../assets/images/back-arrow.png";

function Support() {
  const history = useNavigate();
  return (
    <>
      <div className="support-body">
        <center className="support-text-center">
          <img
            src={back}
            className="back-btn"
            onClick={() => {
              history(-1);
            }}
          />
          <p className="support-text">Support</p>
        </center>
        <div className="profile-detail">
          <p className="profile-details-text">Name</p>
          <input className="profile-details-input-box"></input>
          <p className="profile-details-text">Email Address</p>
          <input type="email" className="profile-details-input-box"></input>
          <p className="profile-details-text">Order ID</p>
          <input className="profile-details-input-box"></input>
          <p className="profile-details-text">Subject</p>
          <input className="profile-details-input-box"></input>
          <p className="profile-details-text">Message</p>
          <textarea className="profile-details-input-box-text-area"></textarea>
        </div>
        <center>
          <div className="submit-btn-div">
            <button className="submit-btn-support">Submit</button>
          </div>
        </center>
      </div>
    </>
  );
}

export default Support;
