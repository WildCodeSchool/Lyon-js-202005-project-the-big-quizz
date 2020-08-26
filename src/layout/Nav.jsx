import React from "react";
import "../App.css";

function Nav(props) {
  return (
    <div className="nav">
      <p>Nav</p>
      <p>nombre de joueurs : {props.gameParameters.nbPlayers}</p>
    </div>
  );
}

export default Nav;
