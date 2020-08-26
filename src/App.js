import React, { useState } from "react";

import "./App.css";

import GridLayout from "./layout/GridLayout";

function App() {
  // variables de paramètrage du jeu

  const nbPlayersMin = 1;
  const nbPlayersMax = 10;

  const [nbPlayers, setNbPlayers] = useState(nbPlayersMin);
  const [playerNames, setPlayerNames] = useState(["Player #1"]);
  const [maxQuestionsPerPlayer, setMaxQuestionsPerPlayer] = useState(50);
  const [difficultyLevel, setDifficultyLevel] = useState("Easy");

  //

  return (
    <div className="App">
      <GridLayout
        gameParameters={{
          nbPlayersMin: nbPlayersMin,
          nbPlayersMax: nbPlayersMax,
          nbPlayers: nbPlayers,
          setNbPlayers: setNbPlayers,
          playerNames: playerNames,
          setPlayerNames: setPlayerNames,
          maxQuestionsPerPlayer: maxQuestionsPerPlayer,
          setMaxQuestionsPerPlayer: setMaxQuestionsPerPlayer,
          difficultyLevel: difficultyLevel,
          setDifficultyLevel: setDifficultyLevel
        }}
      ></GridLayout>
    </div>
  );
}

export default App;
