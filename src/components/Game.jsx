import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-modal";
import axios from "axios";

const Game = () => {
  const [level, setLevel] = useState(null);
  const [goodAnswerModalIsOpen, setGoodAnswerModalIsOpen] = useState(false);
  const [wrongAnswerModalIsOpen, setWrongAnswerModalIsOpen] = useState(false);
  const [goodCounter, setGoodCounter] = useState(0); 
  const [wrongCounter, setWrongCounter] = useState(0); 

  const [id, setId] = useState(1);
  let levelDifficulty = "easy";
  let numberOfQuestion = 12;
  let categoryOfQuestion = 23;

  const handleModalGoodAnswer = () => {
    setId(id + 1);
    setGoodAnswerModalIsOpen(false);
    setGoodCounter(goodCounter + 1)

  }
  const handleModalWrongAnswer = () => {
    setId(id + 1);
    setWrongAnswerModalIsOpen(false);
    setWrongCounter(wrongCounter + 1)

  }
  useEffect(() => {
    axios
      .get(
       `https://opentdb.com/api.php?amount=${numberOfQuestion}&category=${categoryOfQuestion}&difficulty=${levelDifficulty}`
      )
      .then((res) => {
        setLevel(res.data.results);
      });
  }, []);
  return level !== null ? (
    <div className="game">
      <Modal
        isOpen = {goodAnswerModalIsOpen}
        style={{
          content: {
            backgroundColor: "green",
            width: "40%",
            height: "20%",
            textAlign: "center",
            fontSize: "large",
            position: "absolute",
            left: "30%",
            top: "25%",
          },
        }}
      >
      <h2>Good Answer</h2>
      <button
        style={{ width: "15%", fontSize: "xx-large", color: "black" }}
        onClick={handleModalGoodAnswer}
      >
        Next
      </button>
      </Modal>
      <Modal
        isOpen = {wrongAnswerModalIsOpen}
        style={{
          content: {
            backgroundColor: "red",
            width: "40%",
            height: "20%",
            textAlign: "center",
            fontSize: "large",
            position: "absolute",
            left: "30%",
            top: "25%",
          },
        }}
      >
      <h2>Wrong Answer</h2>
      <p>The good answer is : {level[id].correct_answer}</p>
      <button
        style={{ width: "15%", fontSize: "xx-large", color: "black" }}
        onClick= {handleModalWrongAnswer} 
      >
        Next
      </button>
      </Modal>
      <p>category : {level[id].category}</p>
      <p>Difficulty : {level[id].difficulty}</p>
      <p>{level[id].question}</p>
      <button onClick = {() => setWrongAnswerModalIsOpen(true)}  class="btn btn-primary">{level[id].correct_answer}</button>
      <button onClick = {() => setWrongAnswerModalIsOpen(true)} class="btn btn-secondary">
        {level[id].incorrect_answers[0]}
      </button>
      <br />
      <button onClick = {() => setWrongAnswerModalIsOpen(true)} class="btn btn-warning">{level[id].incorrect_answers[1]}</button>
      <button onClick = {() => setGoodAnswerModalIsOpen(true)} class="btn btn-dark">{level[id].incorrect_answers[2]}</button>
      <br />
      <p>numéro de la question : {id}</p>
      <p>Number of good answers : {goodCounter}</p>
      <p>Number of wrong answers : {wrongCounter}</p>
    </div>
  ) : (
    <p>pas de data</p>
  );
};

export default Game;
