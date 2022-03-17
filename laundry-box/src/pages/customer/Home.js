import React, { useState } from "react";
import hamburger from "../../assets/images/hamburger.png";
import bell from "../../assets/images/bell.png";
import user from "../../assets/images/user.png";
import moment from "moment";
import washandiron from "../../assets/images/wash&iron.png";
import ironing from "../../assets/images/ironing.png";
import dryclean from "../../assets/images/dry-clean.png";
import muslimgirl from "../../assets/images/muslim-girl.png";
import shoecleaning from "../../assets/images/shoecleaning.png";
import dettol from "../../assets/images/house.png";
import washingMachine from "../../assets/images/washing-machine (2).png";
import steamiron from "../../assets/images/steam-iron.png";
import dryingmachine from "../../assets/images/drying-machine.png";
import washingfold from "../../assets/images/washing-fold.png";
import shoeshine from "../../assets/images/shoeshine.png";
import houseicon from "../../assets/images/house-icon.png";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import user_profile from "../../assets/images/profile.png";
import home from "../../assets/images/home.png";
import inbox from "../../assets/images/inbox-black.png";
import customer from "../../assets/images/customer.png";
import document from "../../assets/images/document.png";
import gear from "../../assets/images/gear-black.png";
import logout from "../../assets/images/logout.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const current = new Date();
  const [name, setName] = useState("Mazas Suria");
  const [address, setAddress] = useState("Melton City, Canada");
  const [state, setState] = useState({ left: true });
  const anchor = "left";
  const [profile, setProfile] = useState();
  const history = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="header-drawer">&nbsp;</div>
      <div className="drawer-name-div">
        <img src={user_profile} className="drawer-profile-pic" />
      </div>
      <div className="drawer-name-divs">
        <h3 className="drawer-user-name">{name}</h3>
        <p className="drawer-user-address">{address}</p>
      </div>
      <List sx={{ backgroundColor: "#E1ECEF", height: "100%" }}>
        {["Home", "Inbox", "My Profile", "My Order", "Support", "Logout"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? (
                  <img src={home} className="home-icon" />
                ) : index === 1 ? (
                  <img
                    src={inbox}
                    className="home-icon"
                    onClick={() => {
                      if (text === "Inbox") {
                        history("/inbox");
                      }
                    }}
                  />
                ) : index === 2 ? (
                  <img
                    src={customer}
                    className="home-icon"
                    onClick={() => {
                      if (text === "My Profile") {
                        history("/myprofile");
                      }
                    }}
                  />
                ) : index === 3 ? (
                  <img
                    src={document}
                    className="home-icon"
                    onClick={() => {
                      history("/MyOrder");
                    }}
                  />
                ) : index === 4 ? (
                  <img
                    src={gear}
                    className="home-icon"
                    onClick={() => {
                      if (text === "Support") {
                        history("/support");
                      }
                    }}
                  />
                ) : index === 5 ? (
                  <img src={logout} className="home-icon" />
                ) : (
                  ""
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                onClick={() => {
                  if (text === "Support") {
                    history("/support");
                  } else if (text === "My Profile") {
                    history("/myprofile");
                  } else if (text === "Inbox") {
                    history("/inbox");
                  } else if (text === "My Order") {
                    history("/MyOrder");
                  }
                }}
              />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
      <div className="home-body">
        <div>
          <React.Fragment key={anchor}>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        </div>
        <img
          src={hamburger}
          className="drawer"
          onClick={toggleDrawer(anchor, true)}
        />
        <p>Welcome {name}</p>
        <img src={bell} className="bell" />
        <img src={user} className="user" />
      </div>
      <div className="home-body-btm-main">
        <div className="home-body-btm">
          <p>
            Today, {current.getDate()}{" "}
            {moment(current.getMonth().current).format("MMM")}{" "}
            {current.getFullYear()}
          </p>
        </div>
        <div className="category" style={{ position: "relative" }}>
          <center>
            <img src={washandiron} className="washandiron" />
            <div
              className="washing-machine-div"
              onClick={() => history("/washingandiron")}
            >
              <img
                src={washingMachine}
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "10%",
                  width: "25%",
                  zIndex: 99,
                }}
              />
              <p className="washingandirontext">Washing + Iron</p>
            </div>
          </center>
        </div>
        <div className="category">
          <center>
            <img src={ironing} className="washandiron" />
            <div>
              <img
                src={steamiron}
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "10%",
                  width: "25%",
                  zIndex: 99,
                }}
              />
              <p className="washingandirontext">Iron</p>
            </div>
          </center>
        </div>
        <div className="category">
          <center>
            <img src={dryclean} className="washandiron" />
            <div>
              <img
                src={dryingmachine}
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "8%",
                  width: "25%",
                  zIndex: 99,
                }}
              />
              <p className="washingandirontext">Dry Cleaning</p>
            </div>
          </center>
        </div>
        <div className="category">
          <center>
            <img src={muslimgirl} className="washandiron" />
            <div>
              <img
                src={washingfold}
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "8%",
                  width: "25%",
                  zIndex: 99,
                }}
              />
              <p className="washingandirontext">Wash & Fold</p>
            </div>
          </center>
        </div>
        <div className="category">
          <center>
            <img src={shoecleaning} className="washandiron" />
            <div>
              <img
                src={shoeshine}
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "8%",
                  width: "25%",
                  zIndex: 99,
                }}
              />
              <p className="washingandirontext">Shoe/ Handbag</p>
            </div>
          </center>
        </div>
        <div className="category" style={{ paddingBottom: "1rem" }}>
          <center>
            <img src={dettol} className="washandiron" />
            <div>
              <img
                src={houseicon}
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "8%",
                  width: "25%",
                  zIndex: 99,
                }}
              />
              <p className="washingandirontext">Household</p>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default Home;
