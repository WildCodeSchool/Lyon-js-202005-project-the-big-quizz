import React from "react";
import "../App.css";

const convertTime = (time) =>
  (Math.floor(time / 60) > 0 ? Math.floor(time / 60) + "′" : "") +
  (Math.round(time % 60) < 10 && Math.floor(time / 60) > 0 ? "0" : "") +
  Math.round(time % 60) +
  "″";

function Score(props) {
  //   console.log("props de Score", props);

  let quiz = props.gameParameters.quiz;
  let scores = props.gameParameters.score;

  return (
    <div>
      <div>
        {scores
          // Tri par temps de réponse
          .sort((playerA, playerB) => {
            return (
              playerA.answers
                .map((answer) => answer.duration)
                .reduce((acc, val) => acc + val) -
              playerB.answers
                .map((answer) => answer.duration)
                .reduce((acc, val) => acc + val)
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
          .map((player, i) => (
            <div className="Container" key={player.playerName}>
              <div className="scoreContainer">
                <p className="playerName">
                  {i + 1} - {player.playerName}
                </p>
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
                {props.gameParameters.timerParameter > 0 ? (
                  <p>
                    <b>
                      total time:{" "}
                      {convertTime(
                        player.answers
                          .map((answer) => answer.duration)
                          .reduce((acc, val) => acc + val)
                      )}
                    </b>
                  </p>
                ) : (
                  ""
                )}
                {props.gameParameters.timerParameter > 0 ? (
                  <p>
                    <b>
                      average time:{" "}
                      {convertTime(
                        player.answers
                          .map((answer) => answer.duration)
                          .reduce((acc, val) => acc + val) /
                          player.answers.length
                      )}
                    </b>
                  </p>
                ) : (
                  ""
                )}
              </div>

              {/* map des question d'un joueur */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Score;
