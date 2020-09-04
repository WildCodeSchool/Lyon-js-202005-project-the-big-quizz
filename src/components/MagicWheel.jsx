import React from "react";
import { Link } from "react-router-dom";
import wheel from "../images/wheel.png";
import selector from "../images/selector.png";
import WheelRotation from "./WheelRotation";
import {motion} from "framer-motion";
import "./magicwheel.css";

// class MagicWheel extends React.Component {
//   state = {
//     name: "rotateWheel",
//   };

//   startRotation = () => {
//     this.setState({
//       name: "wheel start-rotate",
//     });
//     setTimeout(() => {
//       this.setState({
//         name: "wheel start-rotate stop-rotate",
//       });
//     }, Math.floor(Math.random() * 1000) + 1000);
//   };

//   render() {
//     return (
//       <>
//         <h1>First Wheel  !</h1>
//         <div className="wheelContainer wrapselector">
//           <div className="wheelContainer">
//             <img
//               className="selector"
//               src={selector}
//               alt="wheel selector"
//               height={500}
//               width={500}
//             ></img>
//           </div>

//           <div className={this.state.name}>
//             <img
//               className="wheel"
//               id="wheel"
//               src={wheel}
//               alt="wheel of questions"
//               heigth={500}
//               width={500}
//             ></img>
//           </div>
//         </div>

//         <br></br>

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

let arrWheel = ["👨‍🎓","🧙‍","🎬","🎙️","🎭","🖥️","🕹️","🎲","🌀","💾","🤓","🔱","🏆","🌍","🗿","🧛‍","👨‍🎨‍","👩‍🎤‍","🐵","🚂","🤖","📡","⛩️","👻"]

console.log(arrWheel[5]);

let wheelObj = [
    [{
        topic : "General knowledge",
        icon : "👨‍🎓",
        id : 1
    }]
    ,
    [{
        topic : "Books",
        icon : "🧙‍",
        id : 2
        }]
    ,
    [{
        topic : "Film",
        icon : "🎬",
        id : 3
        }]
        ,
     [{
        topic : "Music",
        icon : "🎙️",
        id : 4
        }]
    ,
    [{
        topic : "Musical & Theatre",
        icon : "🎭",
        id : 5
        }]
    ,
    [{
        topic : "Television",
        icon : "🖥️",
        id : 6
        }]
    ,
    [{
        topic : "Video Games",
        icon : "🕹️",
        id : 7
        }]
    ,
    [{
        topic : "Board Games",
        icon : "🎲",
        id : 8
        }]
    ,
    [{
        topic : "Sciences & Nature",
        icon : "🌀",
        id : 9
        }]
    ,
    [{
        topic : "Computer",
        icon : "💾",
        id : 10
        }]
    ,
    [{
        topic : "Mathematics",
        icon : "🤓",
        id : 11
        }]
    ,
    [{
        topic : "Mythology",
        icon : "🔱",
        id : 12
        }]
    ,
    [{
        topic : "Sports",
        icon : "🏆",
        id : 13
        }]
    ,
    [{
        topic : "Geography",
        icon : "🌍",
        id : 14
        }]
    ,
    [{
        topic : "History",
        icon : "🗿",
        id : 15
        }]
    ,
    [{
        topic : "Politics",
        icon : "🧛‍",
        id : 16
        }]
    ,
    [{
        topic : "Arts",
        icon : "👨‍🎨‍",
        id : 17
        }]
    ,
    [{
        topic : "Celebrities",
        icon : "👩‍🎤‍",
        id : 18
        }]
    ,
    [{
        topic : "Animals",
        icon : "🐵",
        id : 19
        }]
    ,
    [{
        topic : "Vehicles",
        icon : "🚂",
        id : 20
        }]
    ,
    [{
        topic : "Comics",
        icon : "🤖",
        id : 21
        }]
    ,
    [{
        topic : "Gadgets",
        icon : "📡",
        id : 22
        }]
    ,
    [{
        topic : "Anime & Manga",
        icon : "⛩️",
        id : 23
        }]
    ,
    [{
        topic : "Cartoons",
        icon : "👻",
        id : 24
        }]
]

let spinning = Math.floor(Math.random()*(-100));
console.log(spinning);
 
let spinningValue = spinning;
    if (spinningValue >= 1 && spinningValue <= 15) {
        console.log("👨‍🎓");
    }
    else {
        console.log("🤦‍");
    }

const rotateTransition = {
    duration : 1,
    ease : "easeOut",
}

const styleWheel = {

}

function MagicWheel() {
    return(

    <div className="herodiv">

        <img className="selector"
              src={selector}
              alt="wheel selector"
              height={500}
              width={500}></img>

    
            <motion.img className="wheel"
                src={wheel}
                alt="wheel "
                height={500}
                width={500} style={styleWheel} transition={rotateTransition} animate={{
                    x: 0,
                    y:0,
                    blur: 2,
                    rotate:--spinning,
                }}/>

        <div>
          <button className="magicButton" onClick={this.startRotation}>
            🎰 Squiz-Me ! 🎰
          </button>
        </div>
    </div>
    
    );
  }

export default MagicWheel;
