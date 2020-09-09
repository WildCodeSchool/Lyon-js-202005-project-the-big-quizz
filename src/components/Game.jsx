import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-modal";
import axios from "axios";


// resolve conflit : 

function randomize(array) {
  let i, j, mixed;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    mixed = array[i];
    array[i] = array[j];
    array[j] = mixed;
  }
  return array;
}
function Game(props) {
  let history = useHistory();

  const [timer, setTimer] = useState(
    props.gameParameters.timerParameter === 0
      ? ""
      : props.gameParameters.timerParameter
  );
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

  const [id, setId] = useState(0);
  const [idActualPlayer, setIdActualPlayer] = useState(0);
  const [
    questionNumberOfActualPlayer,
    setQuestionNumberOfActualPlayer,
  ] = useState(1);
  const [goodAnswerModalIsOpen, setGoodAnswerModalIsOpen] = useState(false);
  const [wrongAnswerModalIsOpen, setWrongAnswerModalIsOpen] = useState(false);
  const [timeOffModal, setTimeOffModal] = useState(false);
  const [tableAnswer, setTableAnswer] = useState(null);
  const [displayQuestionNumber, setDisplayQuestionNumber] = useState(
    idActualPlayer +
    "/" +
    props.gameParameters.nbQuestionsPerPlayer * props.gameParameters.nbPlayers
  );

  let difficulty = props.gameParameters.difficultyLevel;
  let numberOfQuestion =
    props.gameParameters.nbPlayers * props.gameParameters.nbQuestionsPerPlayer;
  let categoryOfQuestion = props.gameParameters.category;

  const handleModalGoodAnswer = () => {
    browseTable();
    setTimerOn(true);
    setTimer(
      props.gameParameters.timerParameter === 0
        ? ""
        : props.gameParameters.timerParameter
    );
    setGoodAnswerModalIsOpen(false);
  };
  const handleModalWrongAnswer = () => {
    browseTable();
    setTimerOn(true);
    setTimer(
      props.gameParameters.timerParameter === 0
        ? ""
        : props.gameParameters.timerParameter
    );
    setWrongAnswerModalIsOpen(false);
  };
  const handelModalTimerOff = () => {
    browseTable();
    setTimerOn(true);
    setTimer(props.gameParameters.timerParameter);
    setTimeOffModal(false);
  };
  const handleModalGoodAnswer2 = () => {
    setTimerOn(true);
    setTimer(props.gameParameters.timerParameter);
    setGoodAnswerModalIsOpen(false);
    history.push("/stats");
  };
  const handleModalWrongAnswer2 = () => {
    setTimerOn(true);
    setTimer(props.gameParameters.timerParameter);
    setWrongAnswerModalIsOpen(false);
    history.push("/stats");
  };
  const handelModalTimerOff2 = () => {
    setTimerOn(true);
    setTimer(props.gameParameters.timerParameter);
    setTimeOffModal(false);
    history.push("/stats");
  };

  const handelGoogAnswer = () => {

    setTimerOn(false);
    setTimer(
      props.gameParameters.timerParameter === 0
        ? ""
        : props.gameParameters.timerParameter
    );
    setGoodAnswerModalIsOpen(true)
  };
  const handleWrongAnswer = () => {

    setTimerOn(false);
    setTimer(
      props.gameParameters.timerParameter === 0
        ? ""
        : props.gameParameters.timerParameter
    );

    setWrongAnswerModalIsOpen(true)
  };
  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${numberOfQuestion}&category=${categoryOfQuestion}&difficulty=${difficulty}`
      )
      .then((res) => {
        props.gameParameters.setQuiz(res.data.results);
        setTableAnswer(
          randomize([
            res.data.results[id].correct_answer,
            res.data.results[id].incorrect_answers[0],
            res.data.results[id].incorrect_answers[1],
            res.data.results[id].incorrect_answers[2],
          ])
        );
      });
  }, []);

  useEffect(() => {
    if (props.gameParameters.quiz !== null) {
      setTableAnswer(props.gameParameters.quiz[id].type !== "boolean" ?
        (randomize([
          props.gameParameters.quiz[id].correct_answer,
          props.gameParameters.quiz[id].incorrect_answers[0],
          props.gameParameters.quiz[id].incorrect_answers[1],
          props.gameParameters.quiz[id].incorrect_answers[2],
        ])) :
        (randomize([
          props.gameParameters.quiz[id].correct_answer,
          props.gameParameters.quiz[id].incorrect_answers[0],

        ]))
      );
    }
  }, [id]);

  function browseTable() {
    setIdActualPlayer(
      idActualPlayer === props.gameParameters.nbPlayers - 1
        ? 0
        : idActualPlayer + 1
    );
    setId(id + 1);
    setQuestionNumberOfActualPlayer(questionNumberOfActualPlayer + 1);
    setDisplayQuestionNumber(
      `${questionNumberOfActualPlayer} / ${props.gameParameters.nbQuestionsPerPlayer}`
    );
  }

  return props.gameParameters.quiz !== null && tableAnswer !== null ? (
    <div className="game">
      {timer === 1 && timeOffModal === false ? setTimeOffModal(true) : timer}
      {timer === 1 && timeOffModal === false ? setTimerOn(false) : ""}
      {timer === -1 && timerOn === true ? setTimerOn(false) : ""}
      {timer === -1 && timerOn === true ? setTimer("") : ""}

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
        <h2>
          Good Answer : {props.gameParameters.playerNames[idActualPlayer]}
        </h2>
        <button
          style={{ width: "15%", fontSize: "xx-large", color: "black" }}
          onClick={
            id + 1 !== numberOfQuestion
              ? handleModalGoodAnswer
              : handleModalGoodAnswer2
          }
        >
          {id + 1 !== numberOfQuestion ? "Next" : "results"}
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
        <h2>
          Wrong Answer : {props.gameParameters.playerNames[idActualPlayer]}
        </h2>
        <p>
          The good answer is : {props.gameParameters.quiz[id].correct_answer}
        </p>
        <button
          style={{ width: "15%", fontSize: "xx-large", color: "black" }}
          onClick={
            id + 1 !== numberOfQuestion
              ? handleModalWrongAnswer
              : handleModalWrongAnswer2
          }
        >
          {id + 1 !== numberOfQuestion ? "Next" : "results"}
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
        <h2>time is up : {props.gameParameters.playerNames[idActualPlayer]}</h2>
        <p>
          The good answer is : {props.gameParameters.quiz[id].correct_answer}
        </p>
        <button
          style={{ width: "15%", fontSize: "xx-large", color: "black" }}
          onClick={
            id + 1 !== numberOfQuestion
              ? handelModalTimerOff
              : handelModalTimerOff2
          }
        >
          {id + 1 !== numberOfQuestion ? "Next" : "results"}
        </button>
      </Modal>
      <div className="tableOfGamers">
        <table className="board">
          <thead>
            <tr>
              <th>the list of players</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {props.gameParameters.playerNames.map((name) => {
              return (
                <tr>
                  <td>{name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>
          Nom de l'actuel joueur :{" "}
          {props.gameParameters.playerNames[idActualPlayer]}
        </p>
        <p>Question Number : {questionNumberOfActualPlayer}</p>
        <p>
          Total Questions :{" "}
          {props.gameParameters.nbQuestionsPerPlayer *
            props.gameParameters.nbPlayers}
        </p>
      </div>
      <p>Type of question : {props.gameParameters.quiz[id].type}</p>
      <p>category : {props.gameParameters.quiz[id].category}</p>
      <p>Difficulty : {props.gameParameters.quiz[id].difficulty}</p>

      <p>
        Question :{" "}
        <span
          dangerouslySetInnerHTML={{
            __html: props.gameParameters.quiz[id].question,
          }}
        ></span>
      </p>

      {tableAnswer.map((answer, i) => {
        return (
          <div>
            <button
              key={i}
              onClick={
                answer === props.gameParameters.quiz[id].correct_answer
                  ? handelGoogAnswer
                  : handleWrongAnswer
              }
            >
              <p dangerouslySetInnerHTML={{ __html: answer }}></p>
            </button>
            ;
          </div>
        );
      })}

    </div>
  ) : (
      <p>pas de data</p>
    );
}

export default Game;

