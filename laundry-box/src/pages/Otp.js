import React from "react";
import back from "../assets/images/back-arrow.png";
import unlock from "../assets/images/unlock.png";
import { useNavigate } from "react-router-dom";

function Otp() {
  const history = useNavigate();
  return (
    <>
      <div>
        <div>
          <img
            src={back}
            className="back-btn"
            onClick={() => {
              history(-1);
            }}
          />
        </div>
        <div>
          <p className="enter-otp-code-text">
            We are sending you an OTP to verify your email address
          </p>
        </div>
        <center>
          <div className="enter-your-locker-code-here">
            Please enter otp code here
            <div className="code-box">
              <input type="number" className="unlock-locker-code-box" />
              <input type="number" className="unlock-locker-code-box" />
              <input type="number" className="unlock-locker-code-box" />
              <input type="number" className="unlock-locker-code-box" />
            </div>
          </div>
          <div>
            <p className="didnt-not-received-code">I didn't receive a code!</p>
            <p className="resend-code">Resend Code</p>
          </div>
        </center>
        <div>
          <button
            onClick={() => {
              history("/login");
            }}
            className="unlock-btns"
          >
            Verify
          </button>
        </div>
      </div>
    </>
  );
}

export default Otp;
