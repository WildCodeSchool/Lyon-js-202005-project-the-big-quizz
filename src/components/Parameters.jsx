import React from 'react';
import NbPlayers from './NbPlayers';
import { Link } from "react-router-dom";
import "../App.css";

function Parameters() {

    const handleClick = (e) => {
        console.log(e);
    }

    return (
        <div className="Parameters">
            <h1>Parameters</h1>
            <p>ensemble des composants paramètres (input et selects)</p>
            <NbPlayers className="NbStyle" />
            <p>Autres composants à venir</p>


            <Link to="/Game"><button>1 commencer le jeu</button></Link>
            <button onClick={handleClick}>2 commencer le jeu</button>

        </div>
    );
}

export default Parameters;