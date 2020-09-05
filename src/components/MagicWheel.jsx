import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import wheel from "../images/wheel.png";
import selector from "../images/selector.png";
import WheelRotation from "./WheelRotation";
import { motion } from "framer-motion";
import "./magicwheel.css";
import "../App.css";

// const Gk = [1,15];
// const Books = [16,30]
// const Film = [31,45]
// const Music = [46,60]
// const MusicTheatre = [61,75]
// const Television = [76,90]
// const VideoGames = [91,105]
// const BoardGames = [106,120]
// const ScienceNature = [121,135]
// const Computer = [136,150]
// const Mathematics = [151,165]
// const Mythology = [166,180]
// const Sports = [181,195]
// const Geography = [196,210]
// const History = [211,225]
// const Politics = [226,240]
// const Arts = [241,255]
// const Celebrities = [256,270]
// const Animals = [271,285]
// const Vehicles = [286,300]
// const Comics = [301,315]
// const Gadgets = [316,330]
// const AnimeManga = [331,345]
// const Cartoons = [346,360]

let arrWheel = [
  "👨‍🎓",
  "🧙‍",
  "🎬",
  "🎙️",
  "🎭",
  "🖥️",
  "🕹️",
  "🎲",
  "🌀",
  "💾",
  "🤓",
  "🔱",
  "🏆",
  "🌍",
  "🗿",
  "🧛‍",
  "👨‍🎨‍",
  "👩‍🎤‍",
  "🐵",
  "🚂",
  "🤖",
  "📡",
  "⛩️",
  "👻",
];

let wheelObj = [
  [
    {
      topic: "General knowledge",
      icon: "👨‍🎓",
      id: 1,
    },
  ],
  [
    {
      topic: "Books",
      icon: "🧙‍",
      id: 2,
    },
  ],
  [
    {
      topic: "Film",
      icon: "🎬",
      id: 3,
    },
  ],
  [
    {
      topic: "Music",
      icon: "🎙️",
      id: 4,
    },
  ],
  [
    {
      topic: "Musical & Theatre",
      icon: "🎭",
      id: 5,
    },
  ],
  [
    {
      topic: "Television",
      icon: "🖥️",
      id: 6,
    },
  ],
  [
    {
      topic: "Video Games",
      icon: "🕹️",
      id: 7,
    },
  ],
  [
    {
      topic: "Board Games",
      icon: "🎲",
      id: 8,
    },
  ],
  [
    {
      topic: "Sciences & Nature",
      icon: "🌀",
      id: 9,
    },
  ],
  [
    {
      topic: "Computer",
      icon: "💾",
      id: 10,
    },
  ],
  [
    {
      topic: "Mathematics",
      icon: "🤓",
      id: 11,
    },
  ],
  [
    {
      topic: "Mythology",
      icon: "🔱",
      id: 12,
    },
  ],
  [
    {
      topic: "Sports",
      icon: "🏆",
      id: 13,
    },
  ],
  [
    {
      topic: "Geography",
      icon: "🌍",
      id: 14,
    },
  ],
  [
    {
      topic: "History",
      icon: "🗿",
      id: 15,
    },
  ],
  [
    {
      topic: "Politics",
      icon: "🧛‍",
      id: 16,
    },
  ],
  [
    {
      topic: "Arts",
      icon: "👨‍🎨‍",
      id: 17,
    },
  ],
  [
    {
      topic: "Celebrities",
      icon: "👩‍🎤‍",
      id: 18,
    },
  ],
  [
    {
      topic: "Animals",
      icon: "🐵",
      id: 19,
    },
  ],
  [
    {
      topic: "Vehicles",
      icon: "🚂",
      id: 20,
    },
  ],
  [
    {
      topic: "Comics",
      icon: "🤖",
      id: 21,
    },
  ],
  [
    {
      topic: "Gadgets",
      icon: "📡",
      id: 22,
    },
  ],
  [
    {
      topic: "Anime & Manga",
      icon: "⛩️",
      id: 23,
    },
  ],
  [
    {
      topic: "Cartoons",
      icon: "👻",
      id: 24,
    },
  ],
];

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

// const rotateTransition = {
//     duration : 1,
//     ease : "easeOut",
// }

// const loaderParams = {

// }
// const Loader = () => {
//     return (
//         <>
//             <motion.div className="loader">

//             </motion.div>
//         </>
//     )
// }

function MagicWheel() {
  return (
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
  );
}

export default MagicWheel;
