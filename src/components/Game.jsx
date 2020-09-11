import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-modal";
import axios from "axios";
import Score from "./Score";
import { Card, CardText, Row, Col, Progress } from "reactstrap";
import "./../App.css";
// import { categoriesData } from "./categoriesData.js";

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
  const score = props.gameParameters.score;
  const setScore = props.gameParameters.setScore;
  const playerNames = props.gameParameters.playerNames;
  const timerParameter = props.gameParameters.timerParameter;

  useEffect(() => {
    let array = [];
    for (let player of props.gameParameters.playerNames) {
      array.push({
        playerName: player,
        answers: [],
      });
      setScore(array);
    }
  }, []);

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
  // const [displayQuestionNumber, setDisplayQuestionNumber] = useState(
  //   idActualPlayer +
  //     "/" +
  //     props.gameParameters.nbQuestionsPerPlayer * props.gameParameters.nbPlayers
  // );
  // const [percentRange, setPercentRange] = useState(
  //   props.gameParameters.nbQuestionsPerPlayer * props.gameParameters.nbPlayers
  // );

  let difficulty = props.gameParameters.difficultyLevel;
  let numberOfQuestion =
    props.gameParameters.nbPlayers * props.gameParameters.nbQuestionsPerPlayer;
  let categoryOfQuestion = props.gameParameters.category;
  let questionType = props.gameParameters.questionsType;

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
    setId(id + 1);
    setTimeOffModal(false);
    history.push("/stats");
  };

  const handelGoodAnswer = () => {
    setTimerOn(false);
    setTimer(
      props.gameParameters.timerParameter === 0
        ? ""
        : props.gameParameters.timerParameter
    );

    let tmp = score;
    // console.log("tmp : ", tmp)
    // console.log("tmp2 : ", tmp.filter(player=>player.playerName===playerNames[idActualPlayer])[0].answers);
    let arr = tmp.filter(
      (player) => player.playerName === playerNames[idActualPlayer]
    )[0].answers;
    arr.push({
      idQuestion: id,
      correctAnswer: true,
      idIncorrectAnswer: -1,
      duration: timerParameter - timer,
    });
    //console.log("arr:",arr);
    /************************************************************************************ */
    /************************************************************************************ */
    setScore((prevScore) => {
      /*console.log('Good');
      console.log(prevScore);
      console.log(idActualPlayer);
      console.log(prevScore[0].playerName);
      console.log(prevScore[1].playerName);*/

      let tmpArr = prevScore;
      tmpArr[idActualPlayer].answers = arr;
      // console.log('tmpArr :', tmpArr);
      // console.log('idActualPlayer :', idActualPlayer);
      return tmpArr;
    });

    setGoodAnswerModalIsOpen(true);
  };
  const handleWrongAnswer = (e) => {
    // console.log("e.target",e.target);
    // console.log("e.target.parentNode",e.target.parentNode);
    // console.log("e.target.attributes.idincorrectanswer.value",parseInt(e.target.attributes.idincorrectanswer.value));

    setTimerOn(false);
    setTimer(
      props.gameParameters.timerParameter === 0
        ? ""
        : props.gameParameters.timerParameter
    );
    let tmp = score;
    // console.log("tmp : ", tmp)
    // console.log("tmp2 : ", tmp.filter(player=>player.playerName===playerNames[idActualPlayer])[0].answers);
    let arr = tmp.filter(
      (player) => player.playerName === playerNames[idActualPlayer]
    )[0].answers;
    arr.push({
      idQuestion: id,
      correctAnswer: false,
      idIncorrectAnswer: parseInt(e.target.attributes.idincorrectanswer.value),
      duration: timerParameter - timer,
    });
    // console.log(arr);
    setScore((prevScore) => {
      // console.log('Wrong');
      // console.log(prevScore);
      // console.log(idActualPlayer);
      // console.log(prevScore[0].playerName);
      // console.log(prevScore[1].playerName);
      let tmpArr = prevScore;
      tmpArr[idActualPlayer].answers = arr;
      // console.log('tmpArr :', tmpArr);
      // console.log('idActualPlayer :', idActualPlayer);
      return tmpArr;
    });

    /******************************************************************************************* */
    setWrongAnswerModalIsOpen(true);
  };

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${numberOfQuestion}&category=${categoryOfQuestion}&difficulty=${difficulty}&type=${questionType}`
      )
      .then((res) => {
        props.gameParameters.setQuiz(res.data.results);
        setTableAnswer(
          randomize([
            [res.data.results[id].correct_answer, -1],
            [res.data.results[id].incorrect_answers[0], 0],
            [res.data.results[id].incorrect_answers[1], 1],
            [res.data.results[id].incorrect_answers[2], 2],
          ])
        );
      });
  }, []);

  useEffect(() => {
    if (props.gameParameters.quiz !== null) {
      setTableAnswer(
        props.gameParameters.quiz[id].type !== "boolean"
          ? randomize([
              [props.gameParameters.quiz[id].correct_answer, -1],
              [props.gameParameters.quiz[id].incorrect_answers[0], 0],
              [props.gameParameters.quiz[id].incorrect_answers[1], 1],
              [props.gameParameters.quiz[id].incorrect_answers[2], 2],
            ])
          : randomize([
              [props.gameParameters.quiz[id].correct_answer, -1],
              [props.gameParameters.quiz[id].incorrect_answers[0], 0],
            ])
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
    // setDisplayQuestionNumber(
    //   `${questionNumberOfActualPlayer} / ${props.gameParameters.nbQuestionsPerPlayer}`
    // );
  }
  let catLinkImg = "";
  if (props.gameParameters.quiz !== null) {
    catLinkImg = props.gameParameters.quiz[id].category;
  }

  const regTest = catLinkImg.replace(/[^\w\s]/gi, "");
  const okespace = regTest.replace(/ /g, "");

  const divStyle = {
    backgroundImage: `url("${okespace}.jpg")`,
    backgroundSize: "cover",
  };

  return props.gameParameters.quiz !== null && tableAnswer !== null ? (
    <>
      <div style={divStyle}>
        <Row>
          <Col sm="3" md={{ size: 3 }} m="3">
            {id >= props.gameParameters.nbPlayers ? (
              <Score gameParameters={props.gameParameters} />
            ) : (
              ""
            )}
          </Col>
          <Col sm="12" md={{ size: 6 }}>
            <Card className="test">
              <div className="game">
                {timer === 1 && timeOffModal === false
                  ? setTimeOffModal(true)
                  : timer}
                {timer === 1 && timeOffModal === false ? setTimerOn(false) : ""}
                {timer === -1 && timerOn === true ? setTimerOn(false) : ""}
                {timer === -1 && timerOn === true ? setTimer("") : ""}

                <Modal
                  isOpen={goodAnswerModalIsOpen}
                  ariaHideApp={false}
                  style={{
                    content: {
                      backgroundColor: "#FDF1D8",
                      width: "600px",
                      height: "200px",
                      textAlign: "center",
                      fontSize: "x-large",
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      border: "solid 1px black",
                    },
                  }}
                >
                  <h2>
                    Good Answer :{" "}
                    {props.gameParameters.playerNames[idActualPlayer]}
                  </h2>
                  <button
                    style={{
                      marginTop: "20px",
                      backgroundColor: "#D1C2EB",
                      width: "90px",
                      height: "50px",
                      borderRadius: "5px",
                      fontSize: "x-large",
                    }}
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
                  ariaHideApp={false}
                  style={{
                    content: {
                      backgroundColor: "#D57F8E",
                      width: "600px",
                      height: "200px",
                      textAlign: "center",
                      fontSize: "x-large",
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      border: "solid 1px black",
                    },
                  }}
                >
                  <h2 className="modal-answer">
                    Wrong Answer :{" "}
                    {props.gameParameters.playerNames[idActualPlayer]}
                  </h2>
                  <p className="modal-answer">
                    The good answer is :{" "}
                    {props.gameParameters.quiz[id].correct_answer}
                  </p>
                  <button
                    style={{
                      backgroundColor: "#E0B5E3",
                      width: "90px",
                      height: "50px",
                      borderRadius: "5px",
                      fontSize: "x-large",
                    }}
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
                  ariaHideApp={false}
                  style={{
                    content: {
                      backgroundColor: "#D57F8E",
                      width: "600px",
                      height: "200px",
                      textAlign: "center",
                      fontSize: "x-large",
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      border: "solid 1px black",
                    },
                  }}
                >
                  <h2>
                    Time is up :{" "}
                    {props.gameParameters.playerNames[idActualPlayer]}
                  </h2>
                  <p>
                    The good answer is :{" "}
                    {props.gameParameters.quiz[id].correct_answer}
                  </p>
                  <button
                    style={{
                      width: "15%",
                      fontSize: "xx-large",
                      color: "black",
                    }}
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
                        <th>The list of players</th>
                        <th>Answer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.gameParameters.playerNames.map((name) => {
                        return (
                          <tr key={name}>
                            <td>{name}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <Progress
                  style={{
                    backgroundColor: "#FFE74C",
                    width: "70%",
                    height: "50px",
                    borderRadius: "5px",
                  }}
                  value={
                    (questionNumberOfActualPlayer * 100) /
                    (props.gameParameters.nbQuestionsPerPlayer *
                      props.gameParameters.nbPlayers)
                  }
                >
                  Check your progress here
                </Progress>
                <CardText className="">
                  Player name:{" "}
                  {props.gameParameters.playerNames[idActualPlayer]}
                </CardText>
                <CardText className=""></CardText>
                <CardText className="">
                  Category : {props.gameParameters.quiz[id].category}
                </CardText>
                <CardText className="">
                  Type : {questionType || "Any Type"}
                </CardText>
                <CardText className="">
                  Difficulty :
                  {props.gameParameters.quiz[id].difficulty === "hard" ? (
                    <span style={{ color: "#FF0921" }}>
                      {" "}
                      {props.gameParameters.quiz[id].difficulty}
                    </span>
                  ) : props.gameParameters.quiz[id].difficulty === "medium" ? (
                    <span style={{ color: "#dc7f9bs" }}>
                      {" "}
                      {props.gameParameters.quiz[id].difficulty}
                    </span>
                  ) : (
                    <span style={{ color: "#f6b83c" }}>
                      {" "}
                      {props.gameParameters.quiz[id].difficulty}{" "}
                    </span>
                  )}
                </CardText>

                <CardText className="question-style">
                  Question :{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: props.gameParameters.quiz[id].question,
                    }}
                  ></span>
                </CardText>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card className="bordureCardReponse">
              <div>
                {tableAnswer.map((answer, i) => {
                  return (
                    <button
                      className={`answer buttonAnswer_${i}`}
                      key={i}
                      idincorrectanswer={answer[1]}
                      onClick={
                        answer[0] ===
                        props.gameParameters.quiz[id].correct_answer
                          ? handelGoodAnswer
                          : handleWrongAnswer
                      }
                    >
                      <span
                        idincorrectanswer={answer[1]}
                        dangerouslySetInnerHTML={{ __html: answer[0] }}
                      ></span>
                    </button>
                  );
                })}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
}
export default Game;
