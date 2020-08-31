import React from "react";
import "../App.css";

function Nav(props) {
  // console.log(props.gameParameters.resReq)
  return (
    <div className="paramsSummary">
      <h5>Number of players:</h5>
      <p>{props.gameParameters.nbPlayers}</p>
      <h5>Player names:</h5>
      {props.gameParameters.playerNames.map((name) => (
        <p key={name}>{name}</p>
      ))}
      <h5>NbMax questions/player:</h5>
      <p>{props.gameParameters.maxQuestionsPerPlayer}</p>
      <h5>Numbers of questions per player:</h5>
      <p>{props.gameParameters.nbQuestionsPerPlayer}</p>
      <h5>Category:</h5>
      <p>
        {props.gameParameters.category === ""
          ? "Any category"
          : props.gameParameters.category}
      </p>
      <h5>Difficulty level:</h5>
      <p>
        {props.gameParameters.difficultyLevel === ""
          ? "Any level"
          : props.gameParameters.difficultyLevel}
      </p>
      <h5>Type of questions:</h5>
      <p>
        {props.gameParameters.questionsType === ""
          ? "Any type"
          : props.gameParameters.questionsType}
      </p>
      <h5>Timer :</h5>
      <p>{props.gameParameters.timer}</p>
    </div>
  );
}

export default Nav;
