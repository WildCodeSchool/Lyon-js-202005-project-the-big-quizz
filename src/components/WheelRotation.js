import React from "react";
import MagicWheel from "./MagicWheel";
import "../App.css";

function WheelRotation() {
  const wheel = document.querySelector("wheel");
  const MagicButton = document.querySelector("MagicButton");
  let deg = 0;

  MagicButton.addEventListener("Onclick", () => {
    MagicButton.style.pointerEvents = "none";
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = "all 5s ease-out";
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add("blur");
  });

  wheel.addEventListener("rotationend", () => {
    wheel.classList.remove("blur");
    MagicButton.style.pointerEvents = "auto";
    wheel.style.transition = "none";
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
}

export default WheelRotation;
