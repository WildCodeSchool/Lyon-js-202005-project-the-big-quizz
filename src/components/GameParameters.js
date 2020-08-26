import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GameParameters (){
    const [difficultyLevel, setDifficultyLevel] = useState ('Easy');

//      useEffect (()=>{

//             //recupération de l'API 
//             axios. get (`https://opentdb.com/api.php?amount=50&difficulty=${event.target.value} `)
//             .then ((response) => {
//                 setDifficultyLevel (response.data.results)
//             })
//             .catch((error) => {console.log(error);})
           

//    }, [])  
        

    //changement au select : met la value dans difficultyLevel
    function handleChangeItem (event){
        setDifficultyLevel(event.target.value)
        console.log (event.target.value);
       };


    return (

        <div>
            <h2>Choisissez le niveau de dificulté </h2>
            <p>Niveau choisi : {difficultyLevel}</p>
                <select onChange={(event)=>handleChangeItem(event)}> 
                    <option value = 'Easy' name ='Easy'> Easy </option>
                    <option value = 'Medium' name ='Medium'> Medium </option>
                    <option value = 'Hard' name ='Hard'> Hard </option>  
                </select>
        </div>
    )   
}

export default GameParameters;