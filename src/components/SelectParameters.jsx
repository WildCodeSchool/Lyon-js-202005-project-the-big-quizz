import React, { useState, useEffect } from "react";
import axios from "axios";
// import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


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
        <label htmlFor="nbQuestions" className="player-info">Numbers of questions per player: </label>
        <input
          className="input-style"
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
        <label htmlFor="selectCategory" className="player-info"> Category : </label>
        <select id="selectCategory" className="input-style" onChange={(event) => handleCategory(event)}>
       <option className="input-style" value="">Any</option>
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
        <label htmlFor="selectDifficultyLevel" className="player-info">Difficulty level : </label>
        <select
          className="input-style"
          id="selectDifficultyLevel"
          onChange={(event) => handleLevel(event)}
        >
          <option className="input-style" value="">Any</option>
          <option className="input-style" value="easy"> Easy </option>
          <option className="input-style" value="medium"> Medium </option>
          <option className="input-style" value="hard"> Hard </option>
        </select>
      </div>
      <div>
        <label htmlFor="selectTimer" className="player-info">Timer :</label>
        <select className="input-style" id="selectTimer" onChange={handleTimer}>
          <option value={-1} className="input-style">None</option>
          <option value={5} className="input-style">5″</option>
          <option value={10} className="input-style"> 10″ </option>
          <option value={15} className="input-style"> 15″ </option>
          <option value={20} className="input-style"> 20″ </option>
          <option value={30} className="input-style"> 30″</option>
          <option value={40} className="input-style"> 40″</option>
          <option value={50} className="input-style"> 50″</option>
          <option value={60} className="input-style"> 60″</option>
        </select>
      </div>
      <div>
        <span className="player-info">Type of Questions :</span>
        <p>
        <input
          className="input-style"
          type="radio"
          id="anyType"
          name="typeOfQuestions"
          onChange={() => props.gameParameters.setQuestionsType("")}
          checked={props.gameParameters.questionsType === ""}
          value=""
        />
        <label className="player-info" htmlFor="anyType">Any type</label>

        <input
          className="input-style"
          type="radio"
          id="boolean"
          name="typeOfQuestions"
          onChange={() => props.gameParameters.setQuestionsType("boolean")}
          checked={props.gameParameters.questionsType === "boolean"}
          value="boolean"
        />
        <label htmlFor="boolean" className="player-info">True / False</label>

        <input
          className="input-style"
          type="radio"
          id="multiple"
          name="typeOfQuestions"
          onChange={() => props.gameParameters.setQuestionsType("multiple")}
          checked={props.gameParameters.questionsType === "multiple"}
          value="multiple"
        />
        <label htmlFor="multiple" className="player-info">Multiple choice</label>
        </p>
      </div>

    </div>
  );
}

export default SelectParameters;
