import React from "react";
import { Link } from "react-router-dom";
import QuestionOfTheDay from "./QuestionOfTheDay";
import { Button } from 'reactstrap';
import { useState } from "react";
import {motion} from "framer-motion";
import  logo  from "../images/Logo.png";
import wheel from "../images/wheel.png";
import selector from "../images/selector.png";
import "../components/magicwheel.css";

let spinning = Math.floor(Math.random() * 1000);
spinning -= 1.1; /* Décalage visuel de la rue */
console.log(spinning);

let spinningValue = spinning;

if (spinningValue > 360) {
  spinningValue = spinningValue % 360;
  console.log(spinningValue);
}

if (spinningValue >= 1 && spinningValue <= 15) {
  console.log("👨‍🎓");
} else if (spinningValue >= 16 && spinningValue <= 30) {
  console.log("🧙");
} else if (spinningValue >= 31 && spinningValue <= 45) {
  console.log("🎬");
} else if (spinningValue >= 46 && spinningValue <= 60) {
  console.log("🎙️");
} else if (spinningValue >= 61 && spinningValue <= 75) {
  console.log("🎭");
} else if (spinningValue >= 76 && spinningValue <= 90) {
  console.log("🖥️");
} else if (spinningValue >= 91 && spinningValue <= 105) {
  console.log("🕹️");
} else if (spinningValue >= 106 && spinningValue <= 120) {
  console.log("🎲");
} else if (spinningValue >= 121 && spinningValue <= 135) {
  console.log("🌀");
} else if (spinningValue >= 136 && spinningValue <= 150) {
  console.log("💾");
} else if (spinningValue >= 151 && spinningValue <= 165) {
  console.log("🤓");
} else if (spinningValue >= 166 && spinningValue <= 180) {
  console.log("🔱");
} else if (spinningValue >= 181 && spinningValue <= 195) {
  console.log("🏆");
} else if (spinningValue >= 195 && spinningValue <= 210) {
  console.log("🌍");
} else if (spinningValue >= 211 && spinningValue <= 225) {
  console.log("🗿");
} else if (spinningValue >= 226 && spinningValue <= 240) {
  console.log("🧛");
} else if (spinningValue >= 241 && spinningValue <= 255) {
  console.log("👨‍🎨");
} else if (spinningValue >= 256 && spinningValue <= 270) {
  console.log("👩‍🎤‍");
} else if (spinningValue >= 271 && spinningValue <= 285) {
  console.log("🐵‍");
} else if (spinningValue >= 286 && spinningValue <= 300) {
  console.log("🚂‍");
} else if (spinningValue >= 300 && spinningValue <= 315) {
  console.log("🤖‍");
} else if (spinningValue >= 316 && spinningValue <= 330) {
  console.log("📡‍");
} else if (spinningValue >= 331 && spinningValue <= 345) {
  console.log("⛩️‍");
} else if (spinningValue >= 346 && spinningValue <= 360) {
  console.log("👻‍");
}




function Home(props) {
  

    // }else if (categorys === "Entertainment: Cartoon & Animations"){



  return (
    <>
      <div>
        <img src={logo} alt="Logo squizer" />
       </div>

        <div className="herodiv">
            <img
              className="selector"
              src={selector}
              alt="wheel selector"
              height={500}
              width={500}
            ></img>

      <motion.img
        className="wheel"
        initial={{ rotate: 0 }}
        transition={{ delay: 0, duration: 1 }}
        src={wheel}
        alt="wheel "
        height={500}
        width={500}
        animate={{
          x: 0,
          y: 0,
          rotate: -spinning,
        }}
      />
      <br></br>
      <motion.div>
        <button className="magicButton">🎰 Squiz-Me ! 🎰</button>
      </motion.div>
    </div>
       
      <motion.div initial = {{ scale : 0}} animate= {{scale:0}}>
      <QuestionOfTheDay/>
      </motion.div>
      <Link to="/Parameters">
      <Button className="largeBtn"color="primary" size="lg" block>Start to play</Button>
      </Link>
      <br/>
    </>
     
  );
}

export default Home;
