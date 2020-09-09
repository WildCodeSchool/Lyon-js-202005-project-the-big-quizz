import React from "react";
import "../App.css";
import Score from "./Score";

function Stats(props) {
  console.log("props de Stats", props);

  let categoryIcons = {
    "General Knowledge": "👨‍🎓",
    "Entertainment: Books": "🧙‍",
    "Entertainment: Film": "🎬",
    "Entertainment: Music": "🎙️",
    "Entertainment: Musicals & Theatres": "🎭",
    "Entertainment: Television": "🖥️",
    "Entertainment: Video Games": "🕹️",
    "Entertainment: Board Games": "🎲",
    "Science & Nature": "🌀",
    "Science: Computer": "💾",
    "Science: Mathematics": "🤓",
    Mythology: "🔱",
    Sports: "🏆",
    Geography: "🌍",
    History: "🗿",
    Politics: "🧛‍",
    Art: "👨‍🎨‍",
    Celebrities: "👩‍🎤‍",
    Animals: "🐵",
    Vehicles: "🚂",
    "Entertainment: Comics": "🤖",
    "Science: Gadgets": "📡",
    "Entertainment: Japanese Anime & Manga": "⛩️",
    "Entertainment: Cartoon & Animations": "👻",
  };

  let quiz = props.gameParameters.quiz;
  let score = props.gameParameters.score;

  return (
    <div>
      <Score gameParameters={props.gameParameters} />


      <div>
{score
// Tri par temps de réponse
.sort((playerA, playerB) => {
  return (
      playerA.answers.map(answer =>answer.duration).reduce((acc,val) => acc+val)
   -
   playerB.answers.map(answer =>answer.duration).reduce((acc,val) => acc+val)
      
  );
})
  // Tri par nombre de bonnes réponses / nombre de réponses
  .sort((playerA, playerB) => {
    return (
      playerB.answers.filter((answer) => answer.correctAnswer).length /
        playerB.answers.length -
      playerA.answers.filter((answer) => answer.correctAnswer).length /
        playerA.answers.length
    );
  })
  // map des joueurs
  .map((player,i) => (
    <div className="statsContainer" key={player.playerName}>
      <div className="scoreContainer">
        <p className="playerName">{i+1} - {player.playerName}</p>
        <p className="playerScore">
          {
            player.answers.filter((answer) => answer.correctAnswer)
              .length
          }
          /{player.answers.length}
          {" - "}
          {Math.floor(
            (player.answers.filter((answer) => answer.correctAnswer)
              .length /
              player.answers.length) *
              10000
          ) /
            100 +
            " %"}
        </p>
        {props.gameParameters.timerParameter>0?(<p><b>total time: {player.answers.map(answer =>answer.duration).reduce((acc,val) => acc+val)+"″"}</b></p>) :""}
        

      </div>

      {/* map des question d'un joueur */}
      <div className="cardContainer">
        {player.answers.map((answer, i) => (
          <div className="questionCard" key={"answer" + i}>
            <div className="questionCategory">
              {categoryIcons[quiz[answer.idQuestion].category] + " "}
              {quiz[answer.idQuestion].category.toUpperCase()}
            </div>
            <div className="questionDifficulty">
              {quiz[answer.idQuestion].difficulty.toUpperCase()}
            </div>
            <p className="questionText">
              {i + 1}
              {". "}
              {quiz[answer.idQuestion].question}
            </p>
            {/* bonne réponse */}
            <p className="correctAnswer questionAnswers">
              {quiz[answer.idQuestion].correct_answer}
            </p>

            {/* map des mauvaises réponses d'une question */}
            {quiz[answer.idQuestion].incorrect_answers.map(
              (incorrectAnswer, i) => (
                <p
                  key={"incorrectAnswer" + i}
                  className={
                    i === answer.idIncorrectAnswer
                      ? "incorrectAnswer questionAnswers"
                      : "questionAnswers"
                  }
                >
                  {incorrectAnswer}
                </p>
                
              )
            )}
            {props.gameParameters.timerParameter>0?(<p>time: {answer.duration+"″"}</p>) :""}
          </div>
        ))}
      </div>

      {/* <hr /> */}
    </div>
  ))}
</div>


    </div>
  );
}

export default Stats;
