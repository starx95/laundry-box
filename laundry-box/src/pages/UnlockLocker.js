import React from "react";
import back from "../assets/images/back-arrow.png";
import unlock from "../assets/images/unlock.png";
import { useNavigate } from "react-router-dom";

function UnlockLocker() {
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
          <p className="enter-code-text">Enter Code</p>
        </div>
        <div>
          <p className="enter-locker-code-text">
            Please enter the locker's code
          </p>
        </div>
        <center>
          <div className="enter-your-locker-code-here">
            enter your code here
            <div className="code-box">
              <input type="number" className="unlock-locker-code-box" />
              <input type="number" className="unlock-locker-code-box" />
              <input type="number" className="unlock-locker-code-box" />
              <input type="number" className="unlock-locker-code-box" />
            </div>
          </div>
        </center>
        <div>
          <button className="unlock-btns">
            Unlock &nbsp;&nbsp;
            <img src={unlock} className="unlock-icon" />
          </button>
        </div>
      </div>
    </>
  );
}

export default UnlockLocker;
