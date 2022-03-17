import React from "react";
import logo from "../assets/laundry-box-logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  return (
    <>
      <div className="login-page-body">
        <div className="logo">
          <img src={logo} className="logo-login" />
        </div>
        <div className="welcome-div">
          <p className="welcome-text">Welcome Back</p>
        </div>
        <center className="login-form">
          <form>
            <div className="marginTop-login-form">
              <div className="label-margin-top-login">
                <label for="email">Email</label>
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  className="email-input"
                  required
                ></input>
              </div>
              <div className="label-margin-login">
                <label for="pw">Password</label>
              </div>
              <div>
                <input
                  id="pw"
                  type="password"
                  className="email-input"
                  required
                ></input>
                <div className="forgot-password">
                  <p
                    onClick={() => {
                      history("/forgot-password");
                    }}
                  >
                    Forgot password?
                  </p>
                </div>
              </div>
              <div>
                <p
                  className="unlock-locker-text"
                  onClick={() => {
                    history("/unlock-locker");
                  }}
                >
                  Unlock locker
                </p>
              </div>
              <div className="login-btns-div">
                <div>
                  <button
                    onClick={() => {
                      history("/home");
                    }}
                    className="login-btns"
                  >
                    Sign In
                  </button>
                </div>
                <div>
                  <button
                    className="login-btns"
                    onClick={(e) => {
                      e.preventDefault();
                      history("/register");
                    }}
                  >
                    Register
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

export default Login;
