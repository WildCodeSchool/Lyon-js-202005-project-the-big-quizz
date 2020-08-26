import React from "react";
import { Switch, Route } from 'react-router-dom';
import "../App.css";

import Home from "../components/Home";
import Parameters from "../components/Parameters";
import Game from "../components/Game";
import Stats from "../components/Stats";



function Main(props) {
    

    return (
        <div className="main">
            <p>Main</p>
           
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Parameters" component={Parameters} />
                    <Route path="/Game" component={Game} />
                    <Route path="/Stats" component={Stats} />

                </Switch>
           
        </div>
    );
}

export default Main;