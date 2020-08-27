import React from "react";
import "../App.css";

function NbPlayers(props) {
  //console.log("props de NbPlayers:", props);

  const handleChangeNbPlayers = (
    e,
    tmpPlayerNames,
    tmpNbQuestionsPerPlayer,
    tmpNbPlayerMax,
    tmpNbPlayers
  ) => {
    if (
      e.target.value.length > 0 &&
      e.target.value >= props.gameParameters.nbPlayersMin &&
      e.target.value <= props.gameParameters.nbPlayersMax
    ) {
      tmpPlayerNames = tmpPlayerNames.slice(0, parseInt(e.target.value, 10));
      for (let i = tmpPlayerNames.length + 1; i <= e.target.value; i++) {
        tmpPlayerNames.push("Player #" + i);
      }
      props.gameParameters.setNbPlayers(parseInt(e.target.value, 10));
      props.gameParameters.setPlayerNames(tmpPlayerNames);
      props.gameParameters.setMaxQuestionsPerPlayer(
        Math.floor(50 / e.target.value)
      );
    }

    if (
      tmpNbQuestionsPerPlayer > Math.floor(50 / e.target.value) &&
      tmpNbPlayers < tmpNbPlayerMax
    ) {
      props.gameParameters.setNbQuestionsPerPlayer(
        Math.floor(50 / e.target.value)
      );
    }
  };

  const handleChangeName = (e, tmpPlayerNames) => {
    tmpPlayerNames[e.target.id] = e.target.value;

    props.gameParameters.setPlayerNames(tmpPlayerNames);
  };

  const handleInvalidName = (e, tmpPlayerNames) => {
    tmpPlayerNames[e.target.id] = "Player #" + (parseInt(e.target.id, 10) + 1);
    props.gameParameters.setPlayerNames(tmpPlayerNames);
  };

  return (
    <>
      <div>
        <label htmlFor="nbPlayers">Numbers of players: </label>
        <input
          type="number"
          id="nbPlayers"
          name="nbPlayers"
          value={props.gameParameters.nbPlayers}
          onChange={(e) =>
            handleChangeNbPlayers(
              e,
              [...props.gameParameters.playerNames],
              props.gameParameters.nbQuestionsPerPlayer,
              props.gameParameters.nbPlayersMax,
              props.gameParameters.nbPlayers
            )
          }
        />
      </div>
      <div>
        {props.gameParameters.playerNames.map((playerName, i) => (
          <div key={i}>
            <label htmlFor={i}>Name of player #{i + 1}: </label>
            <input
              id={i}
              type="text"
              value={playerName}
              onChange={(e) =>
                handleChangeName(e, [...props.gameParameters.playerNames])
              }
              onBlur={(e) =>
                e.target.value.length < 1 ||
                props.gameParameters.playerNames.indexOf(e.target.value) !==
                  props.gameParameters.playerNames.lastIndexOf(e.target.value)
                  ? handleInvalidName(e, [...props.gameParameters.playerNames])
                  : ""
              }
            ></input>
          </div>
        ))}
      </div>
    </>
  );
}

export default NbPlayers;
