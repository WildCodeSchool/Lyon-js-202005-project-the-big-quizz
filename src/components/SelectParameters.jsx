import React, { useState, useEffect } from "react";
import axios from "axios";

function SelectParameters(props) {
  // console.log("props de SelectParameters:",props);

  const [lstCategories, setLstCategories] = useState([]);
  //const [selectedType, setSelectedType] = useState("anytype");
  
  
  //recupération de l'API catégory
  useEffect(() => {
    let configAPI = {
      method: "get",
      url: "https://opentdb.com/api_category.php",
    };
    axios(configAPI)
      .then((response) => {
        setLstCategories(response.data.trivia_categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //changement au select :
  function handleChoosenLevel(event) {
    props.gameParameters.setDifficultyLevel(event.target.value);
  }
  function handleChoosenCategory(event) {
    props.gameParameters.setChoosenCategory(event.target.value);
  }
  function handleChoosenTimer(event) {
    props.gameParameters.setChoosenTimer(event.target.value);
  }
  function handleNbQuestionsPerPlayer(event) {
    props.gameParameters.setNbQuestionsPerPlayer(event.target.value);
  }

  return (
    <div>
      <div>
        <label htmlFor="selectDifficultyLevel">Difficulty level : </label>
        <select
          id="selectDifficultyLevel"
          onChange={(event) => handleChoosenLevel(event)}
        >
          <option value="" />
          <option value="Easy"> Easy </option>
          <option value="Medium"> Medium </option>
          <option value="Hard"> Hard </option>
        </select>
      </div>
      <div>
        <label htmlFor="selectChoosenCategory"> Category : </label>
        <select
          id="selectChoosenCategory"
          onChange={(event) => handleChoosenCategory(event)}
        >
          <option value="" />
          {lstCategories.map((item) => {
            return (
              <option key={item.id} value={item.name}>
                {item.name}{" "}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="selectTimer">Timer :</label>
        <select id="selectTimer" onChange={handleChoosenTimer}>
          <option value="" />
          <option value="30"> 30' </option>
          <option value="60"> 60' </option>
          <option value="90"> 90'</option>
        </select>
      </div>
      <div>
        <label htmlFor="nbQuestions">Numbers of questions per player: </label>
        <input
          type="number"
          id="nbQuestions"
          name="nbQuestions"
          min="5"
          max={props.gameParameters.maxQuestionsPerPlayer}
          value={props.gameParameters.nbQuestionsPerPlayer}
          onChange={handleNbQuestionsPerPlayer}
        />
      </div>
      <div 
      >
        <p>Type of Questions :</p>
        <input type="radio" id="anytype" name="typeofquestions"   onChange={()=>props.gameParameters.setQuestionsType("anytype") } 
        checked="false"
         value={props.gameParameters.questionsType}
        />
        <label htmlfor="anytype">Any type</label>
        <input type="radio" id="truefalse" name="typeofquestions" onChange={()=>props.gameParameters.setQuestionsType("truefalse")}
        value={props.gameParameters.questionsType}
        />
        <label htmlfor="truefalse">True / False</label>
        <input type="radio" id="multichoice" name="typeofquestions" onChange={()=>props.gameParameters.setQuestionsType("multichoice")} 
       value={props.gameParameters.questionsType}
        />
        <label htmlfor="truefalse">Multiple choice</label>
      </div>
    </div>
  );
}

export default SelectParameters;

// _ type de questions


