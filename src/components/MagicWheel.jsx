import React from "react";
import { Link } from "react-router-dom";
import Wheel from "../images/wheel.png";
import Selector from "../images/selector.png";
import WheelRotation from "./WheelRotation";
import "../App.css";
import { useState } from "react";

class MagicWheel extends React.Component {
  state = {
    id: "WheelContainer"
  }
    squizTheWheel = () => {
      this.setState({
        name:"WheelContainer start-rotate"
      });
    }
  render (){
    return (
    <>
      <h1>This is a Magic Wheel !</h1>
      <div className="WheelContainer">
        <img
          className="Selector"
          src={Selector}
          alt="wheel selector"
          height={500}
          width={600}
        ></img>
        <img
          className="Wheel"
          id ="Wheel"
          src={Wheel}
          alt="wheel of questions"
          heigth={500}
          width={500}
        ></img>
        <br></br>
        <br></br>
      </div>
      <div>
        <button className="magicButton">🎰 Squiz-Me ! 🎰</button>
        <script src={WheelRotation}></script>
      </div>
    </>
  );
    }
}

export default MagicWheel;
