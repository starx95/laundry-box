import React, { useState } from "react";
import header from "../../assets/images/header1.png";
import back from "../../assets/images/back-arrow.png";
import { useNavigate } from "react-router-dom";
import washingMachine from "../../assets/images/washing-machine-iron-green.png";
import shirt from "../../assets/images/shirt.png";
import short from "../../assets/images/short.png";
import shirts from "../../assets/images/shirts.png";
import minus from "../../assets/images/minus.png";
import plus from "../../assets/images/plus.png";
import rectGreen from "../../assets/images/Rectangle-green.png";
import jeans from "../../assets/images/jeans.png";
import Select from "react-select";
import colourOptions from "./colours";

function WashingAndIron() {
  const filterColours = (inputValue) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const [count, setCount] = useState({
    tshirt: 0,
    jeans: 0,
    shirt: 0,
    short: 0,
  });
  const history = useNavigate();
  return (
    <>
      <div className="body-washandiron">
        {" "}
        <img
          src={back}
          className="back-btn-wash"
          onClick={() => {
            history(-1);
          }}
        />
        <img src={header} className="washandiron-header" />
        <div className="washandiron-middle-div">
          <img src={washingMachine} />
          <p className="washandirontext">Wash + Iron</p>
        </div>
        <div className="blue-bg-to-the-top">
          <div className="washandiron-content-padding">
            <img src={shirt} />
            <div className="washandiron-content-text">
              <p className="washandiron-tshirt">T-shirt</p>
              <p className="washandiron-price">1 x $05.00</p>
            </div>
            <div className="washandiron-count">
              <img
                src={minus}
                className="minus-icon"
                onClick={() =>
                  setCount({
                    ...count,
                    tshirt:
                      count.tshirt !== 0 ? count.tshirt - 1 : count.tshirt,
                  })
                }
              />
              <p className="tshirt-count">{count.tshirt}</p>
              <img
                src={plus}
                className="plus-icon"
                onClick={() => {
                  setCount({ ...count, tshirt: count.tshirt + 1 });
                }}
              />
            </div>
          </div>
          <div className="washandiron-content-padding">
            <img src={jeans} />
            <div className="washandiron-content-text">
              <p className="washandiron-tshirt">jeans</p>
              <p className="washandiron-price">1 x $05.00</p>
            </div>
            <div className="washandiron-count">
              <img
                src={minus}
                className="minus-icon"
                onClick={() => {
                  setCount({
                    ...count,
                    jeans: count.jeans !== 0 ? count.jeans - 1 : count.jeans,
                  });
                }}
              />
              <p className="tshirt-count">{count.jeans}</p>
              <img
                src={plus}
                onClick={() => {
                  setCount({ ...count, jeans: count.jeans + 1 });
                }}
                className="plus-icon"
              />
            </div>
          </div>
          <div className="washandiron-content-padding">
            <img src={shirts} />
            <div className="washandiron-content-text">
              <p className="washandiron-tshirt">shirt</p>
              <p className="washandiron-price">1 x $03.00</p>
            </div>
            <div className="washandiron-count">
              <img
                src={minus}
                className="minus-icon"
                onClick={() => {
                  setCount({
                    ...count,
                    shirt: count.shirt !== 0 ? count.shirt - 1 : count.shirt,
                  });
                }}
              />
              <p className="tshirt-count">{count.shirt}</p>
              <img
                src={plus}
                onClick={() => {
                  setCount({ ...count, shirt: count.shirt + 1 });
                }}
                className="plus-icon"
              />
            </div>
          </div>
          <div className="washandiron-content-padding">
            <img src={short} />
            <div className="washandiron-content-text">
              <p className="washandiron-tshirt">short</p>
              <p className="washandiron-price">1 x $03.00</p>
            </div>
            <div className="washandiron-count">
              <img
                src={minus}
                className="minus-icon"
                onClick={() => {
                  setCount({
                    ...count,
                    short: count.short !== 0 ? count.short - 1 : count.short,
                  });
                }}
              />
              <p className="tshirt-count">{count.short}</p>
              <img
                src={plus}
                onClick={() => {
                  setCount({ ...count, short: count.short + 1 });
                }}
                className="plus-icon"
              />
            </div>
          </div>
        </div>
        <center className="blue-bg">
          <div className="washandiron-dropdown">
            <Select
              className="select-locker-size"
              options={colourOptions}
              placeholder="Select Locker Size"
              menuPlacement="top"
            />
          </div>
          <div>
            <button
              className="cont-btn"
              onClick={() => {
                history("/PickupSchedule");
              }}
            >
              Continue
            </button>
          </div>
        </center>
      </div>
    </>
  );
}

export default WashingAndIron;
