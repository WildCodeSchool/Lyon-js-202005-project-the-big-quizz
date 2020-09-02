import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-modal";
import axios from "axios";

function Game(props) {
  //console.log("props de Game:",props.gameParameters);

  // il faut mettre une condition  à la ligne 123

  const [timer, setTimer] = useState(props.gameParameters.timerParameter);
  const [timerOn, setTimerOn] = useState(true);

  useEffect(() => {
    if (timerOn) {
      const id = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
      return () => clearInterval(id);
    }
    return undefined;
  }, [timerOn]);

  const [goodAnswerModalIsOpen, setGoodAnswerModalIsOpen] = useState(false);
  const [wrongAnswerModalIsOpen, setWrongAnswerModalIsOpen] = useState(false);
  const [timeOffModal, setTimeOffModal] = useState(false);
  const [goodCounter, setGoodCounter] = useState(0);
  const [wrongCounter, setWrongCounter] = useState(0);

  const [id, setId] = useState(1);
  let difficulty = props.gameParameters.difficultyLevel;

  let numberOfQuestion =
    props.gameParameters.nbPlayers * props.gameParameters.nbQuestionsPerPlayer;
  let categoryOfQuestion = props.gameParameters.category;

  const handleModalGoodAnswer = () => {
    setTimerOn(true);
    setTimer(props.gameParameters.timerParameter);
    setId(id + 1);
    setGoodAnswerModalIsOpen(false);
    setGoodCounter(goodCounter + 1);
  };
  const handleModalWrongAnswer = () => {
    setTimerOn(true);
    setTimer(props.gameParameters.timerParameter);
    setId(id + 1);
    setWrongAnswerModalIsOpen(false);
    setWrongCounter(wrongCounter + 1);
  };
  const handelModalTimerOff = () => {
    setTimerOn(true);
    setTimer(props.gameParameters.timerParameter);
    setId(id + 1);
    setTimeOffModal(false);
    setWrongCounter(wrongCounter + 1);
  };
 const timerdGoodAnswer = () => {
  setGoodAnswerModalIsOpen(true)
  setTimerOn(false)

 }
 const timerWrongAnswer = () => {
  setWrongAnswerModalIsOpen(true)
  setTimerOn(false)

 }
  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${numberOfQuestion}&category=${categoryOfQuestion}&difficulty=${difficulty}`
      )
      .then((res) => {
        props.gameParameters.setQuiz(res.data.results);
        console.log("res.data.results: ", res.data.results);
      });
  }, []);

  return props.gameParameters.quiz !== null ? (
    <div className="game">
      {timer === 0 && timeOffModal === false ? setTimeOffModal(true) : timer}
      {timer === 0 && timeOffModal === false ? setTimerOn(false): ""}
      <Modal
        isOpen={goodAnswerModalIsOpen}
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
        isOpen={wrongAnswerModalIsOpen}
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
        <p>
          The good answer is : {props.gameParameters.quiz[id].correct_answer}
        </p>
        <button
          style={{ width: "15%", fontSize: "xx-large", color: "black" }}
          onClick={handleModalWrongAnswer}
        >
          Next
        </button>
      </Modal>
      <Modal
        isOpen={timeOffModal}
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
        <h2>time is up</h2>
        <p>
          The good answer is : {props.gameParameters.quiz[id].correct_answer}
        </p>
        <button
          style={{ width: "15%", fontSize: "xx-large", color: "black" }}
          onClick={handelModalTimerOff}
        >
          Next
        </button>
      </Modal>
      <p>category : {props.gameParameters.quiz[id].category}</p>
      <p>Difficulty : {props.gameParameters.quiz[id].difficulty}</p>

      <p>Question : <span dangerouslySetInnerHTML={{
              __html: props.gameParameters.quiz[id].question,
            }}></span></p>
      
      {props.gameParameters.quiz[id].type === "boolean" ? (
        <>
          <button
            onClick={timerdGoodAnswer}
            className="btn btn-primary"
            dangerouslySetInnerHTML={{
              __html: props.gameParameters.quiz[id].correct_answer,
            }}
          ></button>
          <button
            onClick={timerWrongAnswer}
            className="btn btn-dark"
            dangerouslySetInnerHTML={{
              __html: props.gameParameters.quiz[id].incorrect_answers,
            }}
          ></button>
        </>
      ) : (
        <>
          <button
            onClick={timerdGoodAnswer}
            className="btn btn-primary"
            dangerouslySetInnerHTML={{
              __html: props.gameParameters.quiz[id].correct_answer,
            }}
          ></button>
          <button
            onClick={timerWrongAnswer}
            className="btn btn-secondary"
            dangerouslySetInnerHTML={{
              __html: props.gameParameters.quiz[id].incorrect_answers[0],
            }}
            
          ></button>
          <br />
          <button
            onClick={timerWrongAnswer}
            className="btn btn-warning"
            dangerouslySetInnerHTML={{
              __html: props.gameParameters.quiz[id].incorrect_answers[1],
            }}
          ></button>
          <button
            onClick={timerWrongAnswer}
            className="btn btn-dark"
            dangerouslySetInnerHTML={{
              __html: props.gameParameters.quiz[id].incorrect_answers[2],
            }}
          ></button>
        </>
      )}
      <br />
      <p>
        Question #{id}/{props.gameParameters.nbQuestionsPerPlayer}
      </p>
      <p>Number of good answers : {goodCounter}</p>
      <p>Number of wrong answers : {wrongCounter}</p>
    </div>
  ) : (
    <p>pas de data</p>
  );
}

export default Game;

/*

let score = [
 [ [idQuest, responseOk, idResp, duration ], [idQuest, responseOk, idResp, duration ], [idQuest, responseOk, idResp, duration ]]
 [ [idQuest, responseOk, idResp, duration ], [idQuest, responseOk, idResp, duration ], [idQuest, responseOk, idResp, duration ]]
]


*/
