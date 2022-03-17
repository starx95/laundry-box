import React, { useState } from "react";
import back from "../../assets/images/back-arrow.png";
import { useNavigate } from "react-router-dom";
import indicator from "../../assets/images/indicator.png";
import washandiron from "../../assets/images/washandiron.png";
import calendar from "../../assets/images/calendar-black.png";

function Myorder() {
  const [past, setPast] = useState(true);
  const [current, setCurrent] = useState(false);
  const history = useNavigate();
  return (
    <>
      <center className="support-text-center">
        <img
          src={back}
          className="back-btn"
          onClick={() => {
            history(-1);
          }}
        />
        <p className="support-text">My Order</p>
      </center>
      <div className="myorder-tab">
        <h3
          onClick={() => {
            setPast(true);
            setCurrent(false);
          }}
        >
          Past Orders
        </h3>
        <h3
          onClick={() => {
            setCurrent(true);
            setPast(false);
          }}
        >
          Current Orders
        </h3>
      </div>
      <div className="indicator-flex">
        <div
          className="bottom-tab"
          style={{
            backgroundColor: past
              ? "rgb(197, 233, 244)"
              : "rgb(197, 233, 244, 0.5)",
          }}
        ></div>
        <div
          className="bottom-tab"
          style={{
            backgroundColor: current
              ? "rgb(197, 233, 244)"
              : "rgb(197, 233, 244, 0.5)",
          }}
        ></div>
      </div>
      <div
        className="past-content"
        style={{ display: past ? "block" : "none" }}
      >
        <div className="flex-past-order">
          <p>January</p>
          <p>4 orders</p>
        </div>
        <div className="past-order-details-lists">
          <div className="washtype-image">
            <img src={washandiron} className="washtype-image-sm" />
            <p>Wash + Iron</p>
          </div>
          <div className="calendar-my-order">
            <img src={calendar} />
          </div>
        </div>
      </div>
      <div
        className="current-content"
        style={{ display: current ? "block" : "none" }}
      >
        s
      </div>
    </>
  );
}

export default Myorder;
