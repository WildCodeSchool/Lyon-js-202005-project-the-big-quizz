import React, { useState, useEffect } from "react";
import axios from "axios";

function SelectParameters(props) {
  //  console.log("props de SelectParameters:",props);

  const [lstCategories, setLstCategories] = useState([]);

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
  function handleLevel(event) {
    props.gameParameters.setDifficultyLevel(event.target.value);
  }
  function handleCategory(event) {
    props.gameParameters.setCategory(event.target.value);
  }
  function handleTimer(event) {
    props.gameParameters.setTimerParameter(event.target.value);
  }
  function handleNbQuestionsPerPlayer(event) {
    props.gameParameters.setNbQuestionsPerPlayer(event.target.value);
  }

  return (
    <div>
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
      <div>
        <label htmlFor="selectCategory"> Category : </label>
        <select id="selectCategory" onChange={(event) => handleCategory(event)}>
          <option value="">Any</option>
          {lstCategories.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}{" "}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="selectDifficultyLevel">Difficulty level : </label>
        <select
          id="selectDifficultyLevel"
          onChange={(event) => handleLevel(event)}
        >
          <option value="">Any</option>
          <option value="easy"> Easy </option>
          <option value="medium"> Medium </option>
          <option value="hard"> Hard </option>
        </select>
      </div>
      <div>
        <span>Type of Questions :</span>
        <input
          type="radio"
          id="anyType"
          name="typeOfQuestions"
          onChange={() => props.gameParameters.setQuestionsType("")}
          checked={props.gameParameters.questionsType === ""}
          value=""
        />
        <label htmlFor="anyType">Any type</label>

        <input
          type="radio"
          id="boolean"
          name="typeOfQuestions"
          onChange={() => props.gameParameters.setQuestionsType("boolean")}
          checked={props.gameParameters.questionsType === "boolean"}
          value="boolean"
        />
        <label htmlFor="boolean">True / False</label>

        <input
          type="radio"
          id="multiple"
          name="typeOfQuestions"
          onChange={() => props.gameParameters.setQuestionsType("multiple")}
          checked={props.gameParameters.questionsType === "multiple"}
          value="multiple"
        />
        <label htmlFor="multiple">Multiple choice</label>
      </div>
      <div>
        <label htmlFor="selectTimer">Timer :</label>
        <select id="selectTimer" onChange={handleTimer}>
          <option value={-1}>None</option>
          <option value={5}>5″</option>
          <option value={10}> 10″ </option>
          <option value={15}> 15″ </option>
          <option value={20}> 20″ </option>
          <option value={30}> 30″</option>
          <option value={40}> 40″</option>
          <option value={50}> 50″</option>
          <option value={60}> 60″</option>
        </select>
      </div>
    </div>
  );
}

export default SelectParameters;
