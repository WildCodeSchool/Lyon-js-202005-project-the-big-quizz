import React from "react";
import { Link } from 'react-router-dom';
import { Progress } from 'reactstrap';


function ReactStrap () {
    return(
        <div>
        <h2> Welcome to the ReactStrap Sandbox tutorial</h2>
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