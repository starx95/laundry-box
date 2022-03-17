import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/images/back-arrow.png";
import lorry from "../../assets/images/lorry.png";
import gear from "../../assets/images/gear.png";
import lorryChecked from "../../assets/images/lorry-checked.png";
import checked from "../../assets/images/checked.png";
import cleanzone from "../../assets/images/cleanzone.png";
import jeans from "../../assets/images/jeans-new.png";
import shirt from "../../assets/images/shirt.png";
import discount from "../../assets/images/discount.png";

function Track() {
  const [orderid, setorderid] = useState("1234");
  const [date, setDate] = useState("05 may, 2022");
  const history = useNavigate();
  return (
    <>
      <div className="body-order-placed">
        <center className="support-text-center">
          <p className="support-text">Track My Order</p>
        </center>
        <div className="tracking-icon">
          <center>
            <div>
              <img src={lorry} />
              <p className="delivery-status">
                Picked<br></br> 20 May, 2022
              </p>
            </div>
          </center>
          <center>
            <div>
              <img src={gear} />
              <p className="delivery-status">Progress</p>
            </div>
          </center>
          <center>
            <div>
              <img src={lorryChecked} />
              <p className="delivery-status">Delivered</p>
            </div>
          </center>
          <center>
            <div>
              <img src={checked} />
              <p className="delivery-status">Completed</p>
            </div>
          </center>
        </div>
        <div className="track-content">
          <img src={cleanzone} className="img-track" />
          <div className="track-order-details-div">
            <p className="track-order-details">Order ID: {orderid}</p>
            <p className="track-order-details">Clean Zone</p>
            <p className="date-tracking">{date}</p>
            <div className="status-flex">
              <p className="pickup-text">Pickup</p>&nbsp;
              <p className="paid-text">Paid</p>
            </div>
          </div>
        </div>
        <div className="white-bg">
          <div className="flex-order-details">
            <div className="flex-detail">
              <img src={jeans} />
              <p className="order-details-track">4X Jeans</p>
            </div>
            <div className="price-flex">
              <p style={{ marginLeft: "-1rem" }}>RM38</p>
            </div>
          </div>
          <hr></hr>
          <div className="flex-order-details">
            <img src={shirt} />
            <p className="order-details-track">6X Shirt</p>
            <div className="price-flex">
              <p>RM18</p>
            </div>
          </div>
          <hr></hr>
          <div className="flex-order-details">
            <img src={discount} />
            <p className="order-details-track">Discount 10%</p>
            <div className="price-flex">
              <p>RM05</p>
            </div>
          </div>
          <hr></hr>
          <div className="total-flex">
            <p>Total</p>
            <p>RM51</p>
          </div>
        </div>
        <div className="track-homepage-btn">
          <button
            className="hmpg-btn"
            onClick={() => {
              history("/home");
            }}
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </>
  );
}

export default Track;
