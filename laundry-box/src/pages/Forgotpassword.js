import React from "react";
import logo from "../assets/laundry-box-logo.png";
import { useNavigate } from "react-router-dom";

function Forgotpassword() {
  const history = useNavigate();
  return (
    <>
      <div className="login-page-body">
        <div className="logo">
          <img src={logo} className="logo-login" />
        </div>
        <div className="welcome-div">
          <p className="welcome-text">Forgot Password</p>
        </div>
        <center className="login-form">
          <form>
            <div className="marginTop-login-form">
              <p>Please enter your email</p>
              <div className="label-margin-top-login">
                <label for="email">Email</label>
              </div>
              <div>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="email-input"
                ></input>
              </div>

              <div className="login-btns-div">
                <div>
                  <button className="login-btns">Submit</button>
                </div>
                <div>
                  <button
                    className="login-btns"
                    onClick={(e) => {
                      e.preventDefault();
                      history("/login");
                    }}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </form>
        </center>
      </div>
    </>
  );
}

export default Forgotpassword;
