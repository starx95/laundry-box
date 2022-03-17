import React from "react";
import write from "../../assets/images/write-logo.png";
import { useNavigate } from "react-router-dom";

function OrderPlaced() {
  const history = useNavigate();
  return (
    <>
      <div className="body-order-placed">
        <div>
          <center className="orderPlaced-centered">
            <img src={write} />
            <h1 className="success-order-placed">Success! order placed</h1>
            <p className="order-placed-msg">
              Your order has been placed we will notify you when your order has
              been picked up.
            </p>
            <button
              className="btn-order-placed"
              onClick={() => {
                history("/track");
              }}
            >
              Track Your Order
            </button>
          </center>
        </div>
      </div>
    </>
  );
}

export default OrderPlaced;
