import React, { useState } from "react";
import back from "../../assets/images/back-arrow.png";
import { useNavigate } from "react-router-dom";
import jeans from "../../assets/images/jeans-new.png";
import Webcam from "react-webcam";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { MDBBtn } from "mdb-react-ui-kit";
import write from "../../assets/images/write2.png";
import exclamation from "../../assets/images/exclamation-mark.png";

import shirt from "../../assets/images/shirt.png";
import discount from "../../assets/images/discount.png";

function OrderDetails() {
  const history = useNavigate();
  const webcamRef = React.useRef(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "#ffffff",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div>
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
        <center>
          <div className="gray-bg">
            <div className="flex-order-details">
              <div className="flex-detail">
                <img src={jeans} />
                <p className="order-details-qty">4X jeans</p>
              </div>
              <div className="price-flex">
                <p>RM20</p>
              </div>
            </div>
            <hr></hr>
            <div className="flex-order-details">
              <img src={shirt} />
              <p className="order-details-qty">6X shirt</p>
              <div className="price-flex">
                <p>RM18</p>
              </div>
            </div>
            <hr></hr>
            <div className="flex-order-details">
              <img src={discount} />
              <p className="order-details-qtys">Discount 10%</p>
              <div className="price-flex">
                <p>RM5</p>
              </div>
            </div>
          </div>
        </center>
        <center>
          <h3>Snap Photo(optional)</h3>
          <div>
            <Webcam />
          </div>
          <button
            className="place-order"
            onClick={() => {
              setOpen(true);
            }}
          >
            Place Order
          </button>
        </center>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <center>
              <p className="patient-alert">
                Please confirm your order quantity before proceeding
              </p>
              <img src={exclamation} />
            </center>
            <div className="px-5">
              <center>
                <button
                  className="btn form-control patient-okay-button py-3 order-details-okay"
                  onClick={() => {
                    handleClose();
                    history("/payment");
                  }}
                >
                  Confirm
                </button>
                <button
                  className="btn form-control patient-okay-button py-3 order-details-recheck "
                  onClick={handleClose}
                >
                  Re-check
                </button>
              </center>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default OrderDetails;
