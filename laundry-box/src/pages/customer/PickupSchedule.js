import React, { useState } from "react";
import back from "../../assets/images/back-arrow.png";
import { useNavigate } from "react-router-dom";
import shirt from "../../assets/images/shirt.png";
import short from "../../assets/images/short.png";
import shirts from "../../assets/images/shirts.png";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import jeans from "../../assets/images/jeans.png";
import Example from "./DayPicker";

function PickupSchedule() {
  const history = useNavigate();
  const [subtotal, setSubtotal] = useState("RM38");
  const [discount, setDiscount] = useState("RM5");
  const [total, setTotal] = useState("RM33");
  const [selectedDay, setSelectedDay] = useState("");
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
          <p className="support-text">Pickup Schedule</p>
        </center>
        <div>
          <div className="blue-bg-to-the-top">
            <div className="washandiron-content-padding">
              <img src={shirt} />
              <div className="washandiron-content-text">
                <p className="washandiron-tshirt">T-shirt</p>
                <p className="washandiron-price">1 x $05.00</p>
              </div>
              <div className="washandiron-count"></div>
            </div>
            <div className="washandiron-content-padding">
              <img src={jeans} />
              <div className="washandiron-content-text">
                <p className="washandiron-tshirt">jeans</p>
                <p className="washandiron-price">1 x $05.00</p>
              </div>
              <div className="washandiron-count"></div>
            </div>
            <div className="washandiron-content-padding">
              <img src={shirts} />
              <div className="washandiron-content-text">
                <p className="washandiron-tshirt">shirt</p>
                <p className="washandiron-price">1 x $03.00</p>
              </div>
              <div className="washandiron-count"></div>
            </div>
            <div className="washandiron-content-padding">
              <img src={short} />
              <div className="washandiron-content-text">
                <p className="washandiron-tshirt">short</p>
                <p className="washandiron-price">1 x $03.00</p>
              </div>
              <div className="washandiron-count"></div>
            </div>
            {/* <center>
              <div className="pickup-sched-subtotal">
                <div className="subtotal-div">
                  <div className="flex-subtotal">
                    <p>Subtotal</p>
                    <p>{subtotal}</p>
                  </div>
                  <hr className="pickupsched-line"></hr>
                  <div className="flex-discount">
                    <p>Discount</p>
                    <p>{discount}</p>
                  </div>
                  <hr className="pickupsched-line"></hr>
                  <div className="flex-discount">
                    <p>Total</p>
                    <p>{total}</p>
                  </div>
                </div>
              </div>
            </center> */}
            {/* <div className="calendar-div">
              <p>Choose Pickup Date</p>
              <div className="daypicker-bg">
                <DayPicker
                  onDayClick={(day) => {
                    setSelectedDay(day);
                  }}
                />
              </div>
            </div> */}
          </div>
        </div>
        <div>
          <center>
            <div className="pickup-sched-subtotal">
              <div className="subtotal-div">
                <div className="flex-subtotal">
                  <p>Subtotal</p>
                  <p>{subtotal}</p>
                </div>
                <hr className="pickupsched-line"></hr>
                <div className="flex-discount">
                  <p>Discount</p>
                  <p>{discount}</p>
                </div>
                <hr className="pickupsched-line"></hr>
                <div className="flex-discount">
                  <p>Total</p>
                  <p>{total}</p>
                </div>
              </div>
            </div>
          </center>
          <div className="calendar-div">
            <p>Choose Pickup Date</p>
            <center>
              <div className="daypicker-bg">
                <Example />
              </div>

              <button
                onClick={() => {
                  history("/order-details");
                }}
                className="pickupsched-cont-btn"
              >
                Confirm
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default PickupSchedule;
