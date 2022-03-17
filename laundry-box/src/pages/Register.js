import React, { useState, useRef } from "react";
import logo from "../assets/laundry-box-logo.png";
import { useNavigate } from "react-router-dom";
import profile from "../assets/images/profile-img.png";
import { useFilePicker } from "use-file-picker";

function Register() {
  const history = useNavigate();
  const [profileImage, setProfileImage] = useState(profile);
  const inputFile = useRef(null);

  const [image, setImage] = useState("");
  var profileImages = document.getElementById("profile-image");

  const handleFileUpload = (e) => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;

      var parts = filename.split(".");
      const fileType = parts[parts.length - 1];
      console.log(files[0]); //ex: zip, rar, jpg, svg etc.

      setImage(files[0]);
      setProfileImage(URL.createObjectURL(files[0]));
    }
  };

  return (
    <>
      <div className="login-page-body">
        <div className="logo">
          <img src={logo} className="logo-login" />
        </div>
        <div className="welcome-div">
          <p className="welcome-text" style={{ marginBottom: "1rem" }}>
            Register
          </p>
        </div>
        <center className="register-form">
          <form>
            <div className="marginTop-login-form">
              <div>
                <img
                  id="profile-image"
                  className="profile-image"
                  src={profileImage}
                  onClick={() => {
                    inputFile.current.click();
                  }}
                />
                <input
                  style={{ display: "none" }}
                  // accept=".zip,.rar"
                  ref={inputFile}
                  onChange={handleFileUpload}
                  type="file"
                />
              </div>
              <div className="label-margin-top-login">
                <label for="email">Email</label>
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="email-input"
                ></input>
              </div>
              <div className="label-margin-login">
                <label for="pw">Password</label>
              </div>
              <div>
                <input
                  id="pw"
                  name="password"
                  type="password"
                  className="email-input"
                ></input>
              </div>
              <div className="label-margin-login">
                <label for="pw">Repeat Password</label>
              </div>
              <div>
                <input id="rpw" type="password" className="email-input"></input>
              </div>
              <div className="label-margin-login">
                <label for="pw">Name</label>
              </div>
              <div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="email-input"
                ></input>
              </div>
              <div className="label-margin-login">
                <label for="pw">Address</label>
              </div>
              <div>
                <input
                  id="address"
                  type="text"
                  name="address"
                  className="email-input"
                ></input>
              </div>
              <div className="label-margin-login">
                <label for="pw">Phone</label>
              </div>
              <div>
                <input
                  id="phone"
                  type="number"
                  name="phone"
                  className="email-input"
                ></input>
              </div>
              <div className="login-btns-div">
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      history("/login");
                    }}
                    className="login-btns"
                  >
                    Sign In
                  </button>
                </div>
                <div>
                  <button
                    className="login-btns"
                    onClick={() => {
                      history("/otp");
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

export default Register;
