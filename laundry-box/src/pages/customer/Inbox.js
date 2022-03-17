import React from "react";
import edit from "../../assets/images/edit_2.png";
import inbox from "../../assets/images/inbox.png";
import user from "../../assets/images/user.png";
import flag from "../../assets/images/flag.png";
import msg from "../../assets/images/open-mail.png";
import back from "../../assets/images/back-arrow.png";
import { useNavigate } from "react-router-dom";

function Inbox() {
  const history = useNavigate();
  return (
    <>
      <div>
        <div className="inbox-top-icon">
          <img
            src={back}
            className="back-btns"
            onClick={() => {
              history(-1);
            }}
          />
          <img src={edit} className="inbox-edit-icon"></img>
        </div>
        <center>
          <div className="inbox-flex">
            <img src={inbox} className="inbox-icon" />
            <p className="inbox-text">Inbox</p>
          </div>
          <div>
            <p> new message</p>
          </div>
        </center>
        <div className="list-of-inbox">
          <div className="inbox-message">
            <img src={user} className="user-icon-inbox" />
            <div className="inbox-details">
              <p className="inbox-mail-title">Washing Promotion</p>
              <p className="inbox-mail-sender">Mr. Clean</p>
              <p className="inbox-mail-message">
                Lorem ipsum dolor sit amet. Consecte...
              </p>
            </div>
            <div className="inbox-time">
              <p className="inbox-time-received">9:30am</p>
              <img src={flag} className="inbox-flag" />
              <img src={msg} className="inbox-mail" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inbox;
