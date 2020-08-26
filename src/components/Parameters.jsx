import React from 'react';
import NbPlayers from './NbPlayers';
import { Link } from "react-router-dom";
import "../App.css";

function Parameters(props) {
    const testCondition = true;

    const handleClick = (e) => {
        console.log(e);
        if (testCondition) {
            props.history.push("/game")
        }

    }

    return (
        <div className="Parameters">
            <h1>Parameters</h1>
            <p>ensemble des composants paramètres (input et selects)</p>
            <NbPlayers />
            <p>Autres composants...</p>


            <Link to="/game"><button>commencer le jeu</button></Link>
            <button onClick={handleClick}>commencer le jeu (conditionnel)</button>

        </div>
    );
}

export default Parameters;