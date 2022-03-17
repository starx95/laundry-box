import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import exclamation from "../../assets/images/exclamation-mark.png";
import { useNavigate } from "react-router-dom";

function Success() {
  const history = useNavigate();
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = useState(false);
  const handleClose2 = () => setOpen2(false);

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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <center>
              <p className="patient-alert">
                Locker No. 2 has been unlocked. Please put your clothes in there
              </p>
              <img src={exclamation} />
            </center>
            <div className="px-5">
              <center>
                <button
                  className="btn form-control patient-okay-button py-3 order-details-okay"
                  onClick={() => {
                    handleClose();
                    setOpen2(true);
                  }}
                >
                  Confirm
                </button>
              </center>
            </div>
          </Box>
        </Modal>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <center>
              <p className="patient-alert">
                Please close the locker door properly
              </p>
              <img src={exclamation} />
            </center>
            <div className="px-5">
              <center>
                <button
                  className="btn form-control patient-okay-button py-3 order-details-okay"
                  onClick={() => {
                    handleClose2();
                    history("/order-placed");
                  }}
                >
                  Confirm
                </button>
              </center>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Success;
