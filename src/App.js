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

  const [nbQuestionsPerPlayer, setNbQuestionsPerPlayer] = useState("5");
  const [category, setCategory] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [questionsType, setQuestionsType] = useState("");

  const [timer, setTimer] = useState(0);

  // variables du jeux

  const [quiz, setQuiz] = useState(null);
  const [score, setScore] = useState([]);


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
          setDifficultyLevel: setDifficultyLevel,
          category: category,
          setCategory: setCategory,
          timer: timer,
          setTimer: setTimer,
          nbQuestionsPerPlayer: nbQuestionsPerPlayer,
          setNbQuestionsPerPlayer: setNbQuestionsPerPlayer,
          questionsType: questionsType,
          setQuestionsType: setQuestionsType,
          quiz: quiz,
          setQuiz: setQuiz,
          score: score,
          setScore: setScore
        }}
      ></GridLayout>
    </div>
  );
}

export default App;
