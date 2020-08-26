import React, { useState } from "react";
import "../App.css";

const NbPlayers = () => {
  const nbPlayersMin = 1;
  const nbPlayersMax = 10;

  const [nbPlayers, setNbPlayers] = useState(nbPlayersMin);
  const [playerNames, setPlayerNames] = useState(["Player #1"]);
  const [maxQuestionsPerPlayer, setMaxQuestionsPerPlayer] = useState(50);

  const handleChangeNbPlayers = (e, tmpPlayerNames) => {
    if (
      e.target.value.length > 0 &&
      e.target.value >= nbPlayersMin &&
      e.target.value <= nbPlayersMax
    ) {
      tmpPlayerNames = tmpPlayerNames.slice(0, parseInt(e.target.value, 10));
      for (let i = tmpPlayerNames.length + 1; i <= e.target.value; i++) {
        tmpPlayerNames.push("Player #" + i);
      }
      setNbPlayers(parseInt(e.target.value, 10));
      setPlayerNames(tmpPlayerNames);
      setMaxQuestionsPerPlayer(Math.floor(50 / e.target.value));
    }
  };

  const handleChangeName = (e, tmpPlayerNames) => {
    tmpPlayerNames[e.target.id] = e.target.value;

    setPlayerNames(tmpPlayerNames);
  };

  const handleInvalidName = (e, tmpPlayerNames) => {
    tmpPlayerNames[e.target.id] = "Player #" + (parseInt(e.target.id, 10) + 1);
    setPlayerNames(tmpPlayerNames);
  };

  return (
    <>
      <h2>Select the number of players</h2>
      <div>
        <p>
          Numbers of players : <b>{nbPlayers}</b>
        </p>
        <p>
          Name of players : <b>{playerNames.join(" | ")}</b>
        </p>
        <p>
          Max number of questions per player : <b>{maxQuestionsPerPlayer}</b>
        </p>
      </div>
      <div>
        <label htmlFor="nbPlayers">Numbers of players: </label>
        <input
          type="number"
          id="nbPlayers"
          name="nbPlayers"
          value={nbPlayers}
          onChange={(e) => handleChangeNbPlayers(e, [...playerNames])}
        />
      </div>
      <div>
        {playerNames.map((playerName, i) => (
          <div key={i}>
            <label htmlFor={i}>Name of player #{i + 1}: </label>
            <input
              id={i}
              type="text"
              value={playerName}
              onChange={(e) => handleChangeName(e, [...playerNames])}
              onBlur={(e) =>
                e.target.value.length < 1 ||
                playerNames.indexOf(e.target.value) !==
                  playerNames.lastIndexOf(e.target.value)
                  ? handleInvalidName(e, [...playerNames])
                  : ""
              }
            ></input>
          </div>
        ))}
      </div>
    </>
  );
};

export default NbPlayers;
