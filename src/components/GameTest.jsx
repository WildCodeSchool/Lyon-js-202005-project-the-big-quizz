import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

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

const GameTest = () => {
  const [modalGoodIsOpen, setModalGoodIsOpen] = useState(false);
  const [modalWrongIsOpen, setModalWrongIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const [tableAnswer, setTableAnswer] = useState(null);
  const [quiz, setQuiz] = useState(null);
  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=50").then((resp) => {
      setQuiz(resp.data.results);
      console.log(resp.data.results);
      
    });
  }, []);

    useEffect(() => {
      setTableAnswer(
        randomize([
          quiz[id].correct_answer,
          quiz[id].incorrect_answers[0],
          quiz[id].incorrect_answers[1],
          quiz[id].incorrect_answers[2]
        ])
      );

  console.log(id)
    }, [id])

  const handelGoogAnswer = () => {
    setId(id + 1);
    setModalGoodIsOpen(true);
  };
  const handleWrongAnswer = () => {
    setId(id + 1);
    setModalWrongIsOpen(true);
  };
  return quiz !== null && tableAnswer !== null ? (
    <div>
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
            top: "25%"
          }
        }}
      >
        <button onClick={() => setModalGoodIsOpen(false)}>X</button>
      </Modal>
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
            top: "25%"
          }
        }}
      >
        <button onClick={() => setModalWrongIsOpen(false)}>X</button>
      </Modal>
      <p>{quiz[id].question}</p>
      {tableAnswer.map((answer, i) => {
        return (
          <div>
            <button
              key={i}
              onClick={
                answer === quiz[id].correct_answer
                  ? handelGoogAnswer
                  : handleWrongAnswer
              }
            >
              {answer}
            </button>
            ;
          </div>
        );
      })}
      <button
        style={{ backgroundColor: "blue", fontSize: "xx-large" }}
        onClick={() => setId(id + 1)}
      >
        Question suivante
      </button>
    </div>
  ) : (
    <p>Pas de data</p>
  );
};

export default GameTest;
