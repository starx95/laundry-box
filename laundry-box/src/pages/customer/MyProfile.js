import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/images/back-arrow.png";
import home from "../../assets/images/home.png";
import user_profile from "../../assets/images/profile.png";

function MyProfile() {
  const history = useNavigate();
  const [name, setName] = useState("Mazas Suria");
  const [address, setAddress] = useState("Melton City, Canada");
  const [email, setEmail] = useState("demo123@gmail.com");
  const [phone, setPhone] = useState("000-000 0000");
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
          <p className="support-text">My Profile</p>
        </center>
        <div className="profile-detail">
          {" "}
          <center>
            <div className="drawer-name-div">
              <img src={user_profile} className="drawer-profile-pics" />
            </div>
            <h3 className="myprofile-name">{name}</h3>
            <p>{address}</p>
          </center>
        </div>
        <div className="profile-details">
          {" "}
          <center>
            <h3 className="myprofile-email">Email</h3>
            <hr />
            <p className="myprofile-emails">{email}</p>
          </center>
        </div>
        <div className="profile-details">
          {" "}
          <center>
            <h3 className="myprofile-email">Phone</h3>
            <hr />
            <p className="myprofile-emails">{phone}</p>
          </center>
        </div>
        <div className="profile-details">
          {" "}
          <center>
            <h3 className="myprofile-email">Address</h3>
            <hr />
            <p className="myprofile-emails">{address}</p>
          </center>
        </div>
        <div className="profile-details">
          {" "}
          <center>
            <h3 className="myprofile-email">Password</h3>
            <hr />
            <p className="myprofile-emails">change password</p>
          </center>
        </div>
        <center>
          <div className="submit-btn-div">
            <button className="submit-btn-support">Edit</button>
          </div>
        </center>
      </div>
    </>
  );
}

export default MyProfile;
