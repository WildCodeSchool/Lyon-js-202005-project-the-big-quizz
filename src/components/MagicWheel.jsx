import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wheel from "../images/wheel.png";
import Selector from "../images/selector.png";
// import wheelRotation from "./wheelRotation";
import "../App.css";
import "./wheel.css";
import { keyframes } from "styled-components";

function MagicWheel() {
  const [rotationOn, setRotationOn] = useState(false);
  const [actualPosition, setActualPosition] = useState(0);
  let angle = 180;
  let spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(110deg); }
`;

  // const wheelRotation = (e) => {

  // const wheel = document.querySelector("wheel");
  // console.log('wheel: ', wheel);
  // const MagicButton = document.querySelector("MagicButton");
  // let deg = 0;

  // MagicButton.addEventListener("Onclick", () => {
  // MagicButton.style.pointerEvents = "none";
  // deg = Math.floor(5000 + Math.random() * 5000);
  // wheel.style.transition = "all 5s ease-out";
  // wheel.style.transform = `rotate(${deg}deg)`;
  // wheel.classList.add("blur");
  // });

  // wheel.addEventListener("rotationend", () => {
  //   wheel.classList.remove("blur");
  //   MagicButton.style.pointerEvents = "auto";
  //   wheel.style.transition = "none";
  //   const actualDeg = deg % 360;
  //   wheel.style.transform = `rotate(${actualDeg}deg)`;
  // });
  // };

  return (
    <>
      <h1>This is a Magic Wheel !</h1>
      <p>RotationOn is {rotationOn ? "true" : "false"}</p>
      <p>Actual position {actualPosition}</p>
      <div className="WheelContainer">
        <img
          className="Selector"
          src={Selector}
          alt="wheel selector"
          height={500}
          width={500}
        ></img>
        <img
          // className={rotationOn?"rotationOn":"rotationOff"}
          style={
             {
                  // transform: "rotate(" + actualPosition+angle + "deg)",
                  backgroundColor:"green",
                  animation: `${spin} 2s linear infinite`,
                  // transform: "rotate(100deg)",
                  // transitionDuration: "4s",
                  // transitionTimingFunction: "ease-forwards",
                  // transition: "transform 5s",
                  // animation:"5s",
                  // animation:"5s ease forwards",

                }
             
          }
          /*
function Loader() {
  var spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

  var styles = {
    border: "16px solid #eee",
    borderTop: "16px solid #3ae",
    borderRadius: "50%",
    width: "1cm",
    height: "1cm",
    animation: `${spin} 2s linear infinite`
  };
      */




          src={Wheel}
          alt="wheel of questions"
          height={500}
          width={500}
        ></img>
      </div>
      <div>
        <button
          className="MagicButton"
          onClick={() => {
            setRotationOn(true);
            setTimeout(() => {
              setRotationOn(false);
              setActualPosition(actualPosition)
            }, 1000);
          }}
          // disabled={rotationOn?true:false}
        >
          Spin The Wheel !
        </button>
      </div>
    </>
  );
}

export default MagicWheel;

{
  /* <script src={wheelRotation}></script> */
}
