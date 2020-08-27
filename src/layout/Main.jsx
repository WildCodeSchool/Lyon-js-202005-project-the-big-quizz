import React from "react";
import { Switch, Route } from "react-router-dom";
import "../App.css";

import Home from "../components/Home";
import Parameters from "../components/Parameters";
import Game from "../components/Game";
import Stats from "../components/Stats";
import ReactStrap from "../components/ReactStrap";

function Main(props) {
  //   console.log("props de Main :", props);

  return (
    <div className="main">
      <p>Main</p>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/parameters">
          <Parameters {...props} gameParameters={props.gameParameters} />
        </Route>

        {/* <Route  path="/parameters"  
       render={(props) => <gameParameters {...props} gameParameters={props.gameParameters} />}  
         />  */}

        <Route path="/game">
          <Game gameParameters={props.gameParameters} />
        </Route>
        <Route path="/stats" component={Stats} />
        <Route path="/ReactStrap" component={ReactStrap} />
      </Switch>
    </div>
  );
}

export default Main;

/* <Route path="/test/" render={(props) => <Test {...props} lst={lst} />} /> */
