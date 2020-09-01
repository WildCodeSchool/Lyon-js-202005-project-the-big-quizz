import React from "react";
import { Link } from "react-router-dom";
import Wheel from "../images/wheel.png";
import Selector from "../images/selector.png";
import "../App.css";

function MagicWheel() {
  return (
    <>
      <h1>This is a Magic Wheel !</h1>
      <div className="WheelContainer">
        <img
          className="Selector"
          src={Selector}
          alt="wheel selector"
          height={50}
          width={60}
        ></img>
        <img
          className="Wheel"
          src={Wheel}
          alt="wheel of questions"
          heigth={500}
          width={500}
        ></img>
      </div>
    </>
  );
}

export default MagicWheel;
