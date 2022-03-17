import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import irongirl from "../assets/images/iron-girl.png";
import arrowRight from "../assets/images/arrow_right.png";
import laundrygirl2 from "../assets/images/laundry-girl2.png";
import laundrygirl3 from "../assets/images/girl3.png";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const history = useNavigate();
  const mainGroupId = "Main";
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="welcome-carousel">
        {" "}
        <Carousel
          swipeable={true}
          showArrows={false}
          showStatus={false}
          onChange={(index) => {
            setCount(index);
          }}
          infiniteLoop
          autoPlay
        >
          <div>
            <img src={irongirl} />
            <p className="legend">Saving The environment One Wash at a Time</p>
            <p className="text">
              Contrary to popular belief, Lorem Ipsum is not simply random text
              roots in
            </p>
          </div>
          <div>
            <img src={laundrygirl2} className="laundrygirl2" />
            <p className="legend">Professional Services At Your Doorstep</p>
            <p className="text">
              Contrary to popular belief, Lorem Ipsum is not simply random text
              roots in
            </p>
          </div>
          <div>
            <img src={laundrygirl3} className="girl3" />
            <p className="legend">Legend 3</p>
            <p className="text">
              Contrary to popular belief, Lorem Ipsum is not simply random text
              roots in
            </p>
          </div>
        </Carousel>
        <div className="btm-navigate">
          <div className="index-number">
            <p
              className="index"
              style={{ color: count === 0 ? "#99CA3B" : "#023a51" }}
            >
              1
            </p>
            <p
              className="index"
              style={{ color: count === 1 ? "#99CA3B" : "#023a51" }}
            >
              2
            </p>
            <p
              className="index"
              style={{ color: count === 2 ? "#99CA3B" : "#023a51" }}
            >
              3
            </p>
          </div>
          <div>
            <img
              src={arrowRight}
              onClick={() => {
                history("/login");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
