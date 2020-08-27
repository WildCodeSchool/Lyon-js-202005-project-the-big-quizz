import React from "react";
import "../App.css";

function Nav(props) {
  return (
    <div className="nav">
      <h5>nombre de joueurs :</h5>
      <p>{props.gameParameters.nbPlayers}</p>

      <h5>nom des joueurs :</h5>

      {props.gameParameters.playerNames.map((name) => (
        <p>{name}</p>
      ))}

      <h5>nb max de questions/joueur</h5>
      <p>{props.gameParameters.maxQuestionsPerPlayer}</p>

      <h5>nb de questions/joueur</h5>
      <p>{props.gameParameters.nbQuestionsPerPlayer}</p>

      <h5>type de questions</h5>
      <p>{props.gameParameters.questionsType}</p>

      <h5>difficulté :</h5>
      <p>{props.gameParameters.difficultyLevel}</p>
      <h5>catégorie :</h5>
      <p>{props.gameParameters.choosenCategory}</p>
      <h5>timer :</h5>
      <p>{props.gameParameters.choosenTimer}</p>
    </div>
  );
}

export default Nav;
