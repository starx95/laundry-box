import React, { useState } from "react";
import back from "../../assets/images/back-arrow.png";
import { useNavigate } from "react-router-dom";
import jeans from "../../assets/images/jeans-new.png";
import tngo from "../../assets/images/touchngo.png";
import grab from "../../assets/images/grab.png";
import boost from "../../assets/images/boost.png";
import shopee from "../../assets/images/shopee.png";
import wechat from "../../assets/images/wechat.png";
import razer from "../../assets/images/razer.png";
import paypal from "../../assets/images/paypal.png";
import apple from "../../assets/images/apple.png";

function Payment() {
  const history = useNavigate();
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="payment-bg">
        {" "}
        <center className="support-text-center">
          <img
            src={back}
            className="back-btn"
            onClick={() => {
              history(-1);
            }}
          />
          <p className="support-text">Order Details</p>
        </center>
        <div className="white-bg">
          <div className="flex-order-details">
            <div className="flex-detail">
              <img src={jeans} />
              <p className="order-details-qty">Wash + Iron</p>
            </div>
            <div className="price-flex">
              <p>RM38</p>
            </div>
          </div>
          <hr></hr>
          <div className="flex-order-details">
            <img src={jeans} />
            <p className="order-details-qtys">Discount 10%</p>
            <div className="price-flex">
              <p>RM18</p>
            </div>
          </div>
          <hr></hr>
          <div className="total-flex">
            <p>Total</p>
            <p>RM20</p>
          </div>
        </div>
        <div className="payment-div">
          <p>E-wallet</p>
          <center>
            <div className="e-wallet">
              <img
                tabIndex="1"
                onBlur={(e) => (e.target.style.border = "")}
                src={tngo}
                className="e-wallet-payment"
                onClick={(e) => {
                  console.log("tngo");
                  console.log(e.target.style);
                  e.target.style.border = "2px solid #0000ff";
                  e.target.style.borderRadius = "18px";
                  setSelected("tngo");
                }}
              />
              <img
                tabIndex="1"
                onBlur={(e) => (e.target.style.border = "")}
                src={grab}
                className="e-wallet-payment-grab"
                onClick={(e) => {
                  console.log("grab");
                  console.log(e.target.style);
                  e.target.style.border = "2px solid #0000ff";
                  e.target.style.borderRadius = "8px";
                  setSelected("grab");
                }}
              />
              &nbsp;
              <img
                tabIndex="1"
                onBlur={(e) => (e.target.style.border = "")}
                src={boost}
                className="e-wallet-payment-grab"
                onClick={(e) => {
                  console.log("boost");
                  console.log(e.target.style);
                  e.target.style.border = "2px solid #0000ff";
                  e.target.style.borderRadius = "16px";
                  setSelected("boost");
                }}
              />
              &nbsp;
              <img
                tabIndex="1"
                onBlur={(e) => (e.target.style.border = "")}
                src={shopee}
                className="e-wallet-payment-grab"
                onClick={(e) => {
                  console.log("shopee");
                  console.log(e.target.style);
                  e.target.style.border = "2px solid #0000ff";
                  e.target.style.borderRadius = "16px";
                  setSelected("shopee");
                }}
              />
            </div>
            <div className="e-wallet-btm">
              <img
                tabIndex="1"
                onBlur={(e) => (e.target.style.border = "")}
                src={wechat}
                className="e-wallet-payment"
                onClick={(e) => {
                  console.log("wechat");
                  console.log(e.target.style);
                  e.target.style.border = "2px solid #0000ff";
                  e.target.style.borderRadius = "8px";
                  setSelected("wechat");
                }}
              />
              <img
                tabIndex="1"
                onBlur={(e) => (e.target.style.border = "")}
                src={razer}
                className="e-wallet-payment-grab"
                onClick={(e) => {
                  console.log("razer");
                  console.log(e.target.style);
                  e.target.style.border = "2px solid #0000ff";
                  e.target.style.borderRadius = "18px";
                  setSelected("razer");
                }}
              />
              &nbsp;
              <img
                tabIndex="1"
                onBlur={(e) => (e.target.style.border = "")}
                src={paypal}
                className="e-wallet-payment-grab"
                onClick={(e) => {
                  console.log("paypal");
                  console.log(e.target.style);
                  e.target.style.border = "2px solid #0000ff";
                  e.target.style.borderRadius = "8px";
                  setSelected("paypal");
                }}
              />
              &nbsp;
              <img
                tabIndex="1"
                onBlur={(e) => (e.target.style.border = "")}
                src={apple}
                className="e-wallet-payment-grab"
                onClick={(e) => {
                  console.log("paypal");
                  console.log(e.target.style);
                  e.target.style.border = "2px solid #0000ff";
                  e.target.style.borderRadius = "8px";
                  setSelected("paypal");
                }}
              />
            </div>
            <button
              onClick={() => {
                history("/success");
              }}
              className="pickupsched-cont-btns"
            >
              Confirm
            </button>
          </center>
        </div>
      </div>
    </>
  );
}

export default Payment;
