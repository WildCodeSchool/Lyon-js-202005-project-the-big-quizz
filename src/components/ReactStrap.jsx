import React from "react";
import { Link } from 'react-router-dom';
import { Progress } from 'reactstrap';


function ReactStrap () {
    return(
        <div>
        <h2> Welcome to the ReactStrap Sandbox tutorial</h2>
        <a href="https://reactstrap.github.io/">Lien de la Doc de Reactstrap</a>
        <br></br>
        <h6> Avant de commencer, il y a quelques commandes npm à faire :</h6>
        <br></br>
        <p>npm install --save reactstrap</p>
        <p>npm install --save bootstrap</p>
        <br></br>
        <h6>Deuxième étape : importer la commande suivante dans son fichier index.js</h6>
        <p>import 'bootstrap/dist/css/bootstrap.min.css';</p>
        <p>Hello Mada</p>
        <br></br>


        <span>
           
        </span>
        </div>
    );
}




const ProgressExample = (props) => {
  return (
    <div>
      <h2>Progress bar example</h2>
      <Progress value={75}>You're almost there!</Progress>
      <br />
      <Progress color="success" value="100">You did it!</Progress>
    </div>
  );
};
export default ProgressExample;


//export default ReactStrap; 