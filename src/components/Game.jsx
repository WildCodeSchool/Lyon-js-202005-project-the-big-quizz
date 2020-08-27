import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-modal";
import axios from "axios";
 
const Game = (props) => {



  const [goodAnswerModalIsOpen, setGoodAnswerModalIsOpen] = useState(false);
  const [wrongAnswerModalIsOpen, setWrongAnswerModalIsOpen] = useState(false);
  const [goodCounter, setGoodCounter] = useState(0); 
  const [wrongCounter, setWrongCounter] = useState(0); 

  const [id, setId] = useState(1);
  let difficulty = props.gameParameters.difficultyLevel;

  let numberOfQuestion = props.gameParameters.nbPlayers * props.gameParameters.nbQuestionsPerPlayer;
  let categoryOfQuestion = props.gameParameters.choosenCategory;
  

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
       `https://opentdb.com/api.php?amount=${numberOfQuestion}&category=${categoryOfQuestion}&difficulty=${difficulty}`
      )
      .then((res) => {
        props.gameParameters.setResReq(res.data.results);
      });
  }, []);
  return props.gameParameters.resReq !== null ? (
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
      <p>The good answer is : {props.gameParameters.resReq[id].correct_answer}</p>
      <button
        style={{ width: "15%", fontSize: "xx-large", color: "black" }}
        onClick= {handleModalWrongAnswer} 
      >
        Next
      </button>
      </Modal>
      <p>category : {props.gameParameters.resReq[id].category}</p>
      <p>Difficulty : {props.gameParameters.resReq[id].difficulty}</p>
      <p>{props.gameParameters.resReq[id].question}</p>
      <button onClick = {() => setWrongAnswerModalIsOpen(true)}  class="btn btn-primary">{props.gameParameters.resReq[id].correct_answer}</button>
      <button onClick = {() => setWrongAnswerModalIsOpen(true)} class="btn btn-secondary">
        {props.gameParameters.resReq[id].incorrect_answers[0]}
      </button>
      <br />
      <button onClick = {() => setWrongAnswerModalIsOpen(true)} class="btn btn-warning">{props.gameParameters.resReq[id].incorrect_answers[1]}</button>
      <button onClick = {() => setGoodAnswerModalIsOpen(true)} class="btn btn-dark">{props.gameParameters.resReq[id].incorrect_answers[2]}</button>
      <br />
      <p>Question #{id}/{props.gameParameters.nbQuestionsPerPlayer}</p>
      <p>Number of good answers : {goodCounter}</p>
      <p>Number of wrong answers : {wrongCounter}</p>
    </div>
  ) : (
    <p>pas de data</p>
  );
};

export default Game;
