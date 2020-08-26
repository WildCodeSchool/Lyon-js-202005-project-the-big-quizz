import React from "react";
import NbPlayers from "./NbPlayers";
import { Link } from "react-router-dom";
import "../App.css";

function Parameters(props) {
  // console.log("props de Parameters",props.gameParameters);

  const testCondition = true;

  const handleClick = (e) => {
    console.log(e);
    if (testCondition) {
      props.history.push("/game");
    }
  };

  return (
    <div className="Parameters">
      <h1>Parameters</h1>

      <NbPlayers gameParameters={props.gameParameters} />

      <Link to="/game">
        <button>commencer le jeu</button>
      </Link>
      <button onClick={handleClick}>commencer le jeu (conditionnel)</button>
    </div>
  );
}

export default Parameters;
