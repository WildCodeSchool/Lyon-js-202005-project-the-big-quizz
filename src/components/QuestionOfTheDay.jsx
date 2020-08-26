import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const QuestionOfTheDay = () => {
  const [categorys, setcategorys] = useState("");
  const [types, setType] = useState("");
  const [difficultys, setDifficultys] = useState("");
  const [questions, setQuestions] = useState([]);
  const [goodAnswer, setGoodAnswer] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState("");
  const [modalWrongIsOpen, setModelIsOpen] = useState(false);
  const [modalGoodIsOpen, setModalGoodIsOpen] = useState(false);
  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((response) => {
      let myId = Math.floor(Math.random() * 10);
      setcategorys(response.data.results[myId].category);
      setType(response.data.results[myId].type);
      setDifficultys(response.data.results[myId].difficulty);
      setQuestions(response.data.results[myId].question);
      setGoodAnswer(response.data.results[myId].correct_answer);
      setWrongAnswer(response.data.results[myId].incorrect_answers);
    });
  }, []);
  return (
    <div>
      <Modal
        isOpen={modalWrongIsOpen}
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
        <h2>wrong answer</h2>
        <button onClick={() => setModelIsOpen(false)} style={{
            backgroundColor: "blue",
            width: "30%",
            height: "40px",
            borderRadius: "5px",
            color: "white",
            fontSize: "x-large",
          }}>hide the modal</button>
      </Modal>
      <Modal
        isOpen={modalGoodIsOpen}
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
        <h2>right answer</h2>
        <button
          onClick={() => setModalGoodIsOpen(false)}
          style={{
            backgroundColor: "blue",
            width: "30%",
            height: "40px",
            borderRadius: "5px",
            color: "white",
            fontSize: "x-large",
          }}
        >
          hide the modal
        </button>
      </Modal>
      <h1 style={{ marginTop: "10%" }}>Question Of The Day</h1>
      <p style={{ fontWeight: "bold", fontSize: "xx-large" }}>
        Category of question : <span>{categorys}</span>
      </p>
      <p style={{ fontWeight: "bold", fontSize: "xx-large" }}>
        Type of question : <span>{types}</span>
      </p>
      <p style={{ fontSize: "xx-large" }}>
        Difficulty : <span>{difficultys}</span>
      </p>
      <p
        className="questionWrite"
        style={{ fontWeight: "bold", fontSize: "large", color: "SaddleBrown" }}
      >
        <p style={{ color: "black" }}>Question :</p> <br />
        {questions}
      </p>
      <div>
        <button
          onClick={() => setModelIsOpen(true)}
          className="answer"
          style={{ backgroundColor: "LimeGreen" }}
        >
          {" "}
          {wrongAnswer[0]}
        </button>
        <button
          onClick={() => setModalGoodIsOpen(true)}
          className="answer"
          style={{ backgroundColor: "Teal" }}
        >
          {goodAnswer}
        </button>
      </div>
      <div>
        <button
          onClick={() => setModelIsOpen(true)}
          className="answer"
          style={{ backgroundColor: "MediumBlue" }}
        >
          {wrongAnswer[2]}
        </button>
        <button
          onClick={() => setModelIsOpen(true)}
          className="answer"
          style={{ backgroundColor: "SandyBrown" }}
        >
          {wrongAnswer[1]}
        </button>
      </div>
    </div>
  );
};

export default QuestionOfTheDay;
