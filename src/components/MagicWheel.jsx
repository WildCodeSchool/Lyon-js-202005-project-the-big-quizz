import React from "react";
import { Link } from "react-router-dom";
import wheel from "../images/wheel.png";
import selector from "../images/selector.png";
import WheelRotation from "./WheelRotation";
import "../App.css";

class MagicWheel extends React.Component {
  state = {
    name: "rotateWheel",
  };

  startRotation = () => {
    this.setState({
      name: "wheel start-rotate",
    });
    setTimeout(() => {
      this.setState({
        name: "wheel start-rotate stop-rotate",
      });
    }, Math.floor(Math.random() * 1000) + 1000);
  };

  render() {
    return (
      <>
        <h1>This is a Magic Wheel !</h1>
        <div className="wheelContainer wrapselector">
          <div className="wheelContainer">
            <img
              className="selector"
              src={selector}
              alt="wheel selector"
              height={500}
              width={500}
            ></img>
          </div>

          <div className={this.state.name}>
            <img
              className="wheel"
              id="wheel"
              src={wheel}
              alt="wheel of questions"
              heigth={500}
              width={500}
            ></img>
          </div>
        </div>

        <br></br>

        <div>
          <button className="magicButton" onClick={this.startRotation}>
            🎰 Squiz-Me ! 🎰
          </button>
        </div>
      </>
    );
  }
}

export default MagicWheel;
