import React from 'react';
import { Progress } from 'reactstrap';


const ProgressExample = (props) => {
    return (
      <div>
        <Progress value={75}>You're almost there!</Progress>
        <br />
        <Progress color="success" value="100">You did it!</Progress>
      </div>
    );
  };
  export default ProgressExample;