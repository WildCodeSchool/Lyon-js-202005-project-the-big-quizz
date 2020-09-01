import React from "react";

function WheelRotation() {
    const wheel= document.querySelector(.'wheel');
    const MagicButton = document.querySelector(.'MagicButton');
    let deg= 0;

    MagicButton.addEventListener('click', () => {
        MagicButton.style.pointerEvents ='none';
        deg = Math.floor(5000 + Math.random() * 5000);
        wheel.style.transition ='all 5s ease-out';
        wheel.style.transform= `rotate(${deg}deg)`;
        
    });

    wheel.addEventListener('rotationend', () => {

    })
}

export default WheelRotation;
