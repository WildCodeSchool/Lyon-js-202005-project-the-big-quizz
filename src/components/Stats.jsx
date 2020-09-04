import React from "react";
import "../App.css";

function Stats(props) {
  // console.log("props de Stats",props);

  let quiz = [
    {
      category: "History",
      correct_answer: "1789",
      difficulty: "hard",
      incorrect_answers: ["1823", "1756", "1799"],
      question: "When did the French Revolution begin?",
      type: "multiple",
    },
    {
      category: "Entertainment: Music",
      correct_answer: "Tommy Moore",
      difficulty: "hard",
      incorrect_answers: ["Ringo Starr", "Stuart Sutcliffe", "Pete Best"],
      question: "Who was the original drummer for The Beatles?",
      type: "multiple",
    },
    {
      category: "General Knowledge",
      correct_answer: "False",
      difficulty: "medium",
      incorrect_answers: ["True"],
      question: "The vapor produced by e-cigarettes is actually water.",
      type: "boolean",
    },
    {
      category: "Politics",
      correct_answer: "True",
      difficulty: "easy",
      incorrect_answers: ["False"],
      question:
        'There was a satirical candidate named "Deez Nuts" running in the 2016 US presidential elections.',
      type: "boolean",
    },
    {
      category: "Mythology",
      correct_answer: "Poseidon",
      difficulty: "medium",
      incorrect_answers: ["Ares", "Zeus", "Apollo"],
      question: "Neptune's greek name was...",
      type: "multiple",
    },
    {
      category: "Entertainment: Books",
      correct_answer: "Richard Bachman",
      difficulty: "easy",
      incorrect_answers: ["J. D. Robb", "Mark Twain", "Lewis Carroll"],
      question:
        "Under what pseudonym did Stephen King publish five novels between 1977 and 1984?",
      type: "multiple",
    },
    {
      category: "Science & Nature",
      correct_answer: "Vitrainium",
      difficulty: "hard",
      incorrect_answers: ["Praseodymium", "Hassium", "Lutetium"],
      question: "Which of the following is NOT a real element?",
      type: "multiple",
    },
    {
      category: "Entertainment: Books",
      correct_answer: "A Study in Scarlet",
      difficulty: "easy",
      incorrect_answers: [
        "The Sign of the Four",
        "A Case of Identity",
        "The Doings of Raffles Haw",
      ],
      question:
        "What is the title of the first Sherlock Holmes book by Arthur Conan Doyle?",
      type: "multiple",
    },
    {
      category: "Politics",
      correct_answer: "George W. Bush",
      difficulty: "hard",
      incorrect_answers: ["John Kerry", "Barack Obama", "Al Gore"],
      question: `"Yes, America Can!" was this United States politician's de facto campaign slogan in 2004.`,
      type: "multiple",
    },
    {
      category: "General Knowledge",
      correct_answer: "Southeast",
      difficulty: "medium",
      incorrect_answers: ["Southwest", "Northwest", "Northeast"],
      question: "What direction does the Statue of Liberty face?",
      type: "multiple",
    },
    {
      category: "Geography",
      correct_answer: "Kashmir",
      difficulty: "medium",
      incorrect_answers: ["Andorra", "Gibraltar", "Quin"],
      question:
        "What is the region conjoining Pakistan, India, and China with unknown leadership called?",
      type: "multiple",
    },
    {
      category: "Entertainment: Video Games",
      correct_answer: "True",
      difficulty: "medium",
      incorrect_answers: ["False"],
      question:
        'In the video game "Transistor", "Red" is the name of the main character.',
      type: "boolean",
    },
    {
      category: "Entertainment: Video Games",
      correct_answer: "HRL-7",
      difficulty: "medium",
      incorrect_answers: [
        "Heavy Crossbow",
        "Thanatos .50 cal",
        "Broomstick Pistol",
      ],
      question:
        'In "PAYDAY 2", what weapon has the highest base weapon damage on a per-shot basis?',
      type: "multiple",
    },
    {
      category: "Entertainment: Japanese Anime & Manga",
      correct_answer: "Reiner Braun",
      difficulty: "easy",
      incorrect_answers: ["Armin Arlelt", "Mikasa Ackermann", "Eren Jaeger"],
      question: 'Who is the armored titan in "Attack On Titan"?',
      type: "multiple",
    },
    {
      category: "Entertainment: Film",
      correct_answer: "2005",
      difficulty: "hard",
      incorrect_answers: ["2007", "2015", "2020"],
      question:
        'In what year does Jurassic World open in the "Jurassic Park" universe?',
      type: "multiple",
    },
    {
      category: "Science & Nature",
      correct_answer: "Hydrogen & Helium",
      difficulty: "medium",
      incorrect_answers: [
        "Hydrogen & Nitrogen",
        "Carbon & Nitrogen",
        "Carbon & Helium",
      ],
      question: "The Sun consists of mostly which two elements?",
      type: "multiple",
    },
    {
      category: "Entertainment: Television",
      correct_answer: 'Richard "Dick" Whitman',
      difficulty: "easy",
      incorrect_answers: [
        "Donald Draper",
        "John Ashbury",
        'Michael "Mikey" Wilhelm',
      ],
      question: `In the TV show "Mad Men", what was Donald Draper's birthname?`,
      type: "multiple",
    },
    {
      category: "Entertainment: Video Games",
      correct_answer: "Gradius",
      difficulty: "medium",
      incorrect_answers: ["Contra", "Castlevania", "Dance Dance Revolution"],
      question: "In which game did the Konami Code make its first appearance?",
      type: "multiple",
    },
    {
      category: "Entertainment: Video Games",
      correct_answer: "Donkey Kong",
      difficulty: "easy",
      incorrect_answers: ["Mario", "Kirby", "Zelda"],
      question:
        "Lanky, Funky, and Chunky are all characters featured in which series owned by Nintendo?",
      type: "multiple",
    },
    {
      category: "Entertainment: Film",
      correct_answer: "San Francisco",
      difficulty: "medium",
      incorrect_answers: ["Los Angeles", "Sacramento", "San Jose"],
      question:
        "Which town is the setting for the Disney movie The Love Bug (1968)?",
      type: "multiple",
    },
    {
      category: "Entertainment: Comics",
      correct_answer: "Mr. Bun",
      difficulty: "medium",
      incorrect_answers: ["Mr. Bunbun", "Mr. Rabbit", "Mr. Hoppy"],
      question:
        "In Calvin and Hobbes, what is the name of Susie's stuffed rabbit?",
      type: "multiple",
    },
    {
      category: "Entertainment: Video Games",
      correct_answer: "Genocide City Zone",
      difficulty: "medium",
      incorrect_answers: [
        "Stardust Speedway Zone",
        "Sky High Zone ",
        "Clockwork Zone",
      ],
      question:
        'Which stage was planned to be a part of "Sonic the Hedgehog 2", but was scrapped during development?',
      type: "multiple",
    },
    {
      category: "General Knowledge",
      correct_answer: "15%",
      difficulty: "hard",
      incorrect_answers: ["20%", "10%", "25%"],
      question: `In "Battle Cats", what is Moneko / MISS Moneko's critical percentage rate?`,
      type: "multiple",
    },
    {
      category: "Entertainment: Video Games",
      correct_answer: "False",
      difficulty: "easy",
      incorrect_answers: ["True"],
      question: "There are 2 player roles in Trouble in Terrorist Town.",
      type: "boolean",
    },
  ];

  let scores = [
    {playerName: "playerName1",
      answers: [
        { idQuestion: 0,  correctAnswer: true,  idIncorrectAnswer:-1,  duration: 8, },
        { idQuestion: 6, correctAnswer: false, idIncorrectAnswer: 1, duration: 8, },
        { idQuestion: 12, correctAnswer: true, idIncorrectAnswer: -1, duration: 7, },
        // { idQuestion: 18, correctAnswer: true, idIncorrectAnswer: -1, duration: 7, },
      ],},
    {playerName: "playerName2",
      answers: [
        { idQuestion: 1, correctAnswer: true, idIncorrectAnswer: -1, duration: 10, },
        { idQuestion: 7, correctAnswer: true, idIncorrectAnswer: -1, duration: 15, },
        { idQuestion: 13, correctAnswer: true, idIncorrectAnswer: -1, duration: 5, },
        { idQuestion: 19, correctAnswer: true, idIncorrectAnswer: -1, duration: 7, },
      ],},

    {playerName: "playerName3",
      answers: [
        { idQuestion: 2, correctAnswer: true, idIncorrectAnswer: -1, duration: 5, },
        { idQuestion: 8, correctAnswer: false, idIncorrectAnswer: 1, duration: 9, },
        { idQuestion: 14, correctAnswer: true, idIncorrectAnswer: -1, duration: 28, },
        { idQuestion: 20, correctAnswer: true, idIncorrectAnswer: -1, duration: 8, },
      ],},

    {playerName: "playerName4",
      answers: [
        { idQuestion: 3, correctAnswer: true, idIncorrectAnswer: -1, duration: 10, },
        { idQuestion: 9, correctAnswer: true, idIncorrectAnswer: -1, duration: 15, },
        { idQuestion: 15, correctAnswer: false, idIncorrectAnswer: 2, duration: 5, },
        { idQuestion: 21, correctAnswer: true, idIncorrectAnswer: -1, duration: 7, },
      ],},

    {playerName: "playerName5",
      answers: [
        { idQuestion: 4, correctAnswer: false, idIncorrectAnswer: 1, duration: 2, },
        { idQuestion: 10, correctAnswer: false, idIncorrectAnswer: 1, duration: 13, },
        { idQuestion: 16, correctAnswer: false, idIncorrectAnswer: 1, duration: 3, },
        { idQuestion: 22, correctAnswer: false, idIncorrectAnswer: 0, duration: 9, },
      ],},

    {playerName: "playerName6",
      answers: [
        { idQuestion: 5, correctAnswer: true, idIncorrectAnswer: -1, duration: 18, },
        { idQuestion: 11, correctAnswer: true, idIncorrectAnswer: -1, duration: 15, },
        { idQuestion: 17, correctAnswer: false, idIncorrectAnswer: 0, duration: 10, },
        { idQuestion: 23, correctAnswer: false, idIncorrectAnswer: 0, duration: 7, },
      ],},
  ];




  return (
    <div>
      <h1>Stats</h1>
      <div>
        {scores
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
          .map((player) => (
            <div key={player.playerName}>
              <p>
                <b>Nom du jouer : {player.playerName}</b>
              </p>
              <p>
                <b>
                  Score :{" "}
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
                </b>
              </p>

              {/* map des question d'un joueur */}
              <div className="cardContainer">
                {player.answers.map((answer, i) => (
                  <div className="questionCard" key={"answer" + i}>
                    <div className="questionCategory">
                      {quiz[answer.idQuestion].category.toUpperCase()}
                    </div>
                    <div className="questionDifficulty">
                      {quiz[answer.idQuestion].difficulty.toUpperCase()}
                    </div>
                    <p>
                      {i + 1}
                      {". "}
                      {quiz[answer.idQuestion].question}
                    </p>
                    {/* bonne réponse */}
                    <p className="correctAnswer">
                      {quiz[answer.idQuestion].correct_answer}
                    </p>

                    {/* map des mauvaises réponses d'une question */}
                    {quiz[answer.idQuestion].incorrect_answers.map(
                      (incorrectAnswer, i) => (
                        <p
                          key={"incorrectAnswer" + i}
                          className={
                            i === answer.idIncorrectAnswer
                              ? "incorrectAnswer"
                              : ""
                          }
                        >
                          {incorrectAnswer}
                        </p>
                      )
                    )}
                  </div>
                ))}
              </div>

              <hr />
            </div>
          ))}
      </div>
    </div>
  );
}

// https://wprock.fr/blog/emoji-smiley-copier-coller/
// let arr =
// ["😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","😗","😙","😚","🙂","🤗","🤩",
// "😈","👿","🤡","👹","👺","💀","👻","👽","👾","🤖","💩","👨‍🎓","👩‍🎓","👨‍🏫","👩‍🏫","👨‍🌾","👩‍🌾","👨‍🍳","👩‍🍳","👨‍🔧","👩‍🔧","👨‍🏭","👩‍🏭",
// "👨‍💼","👩‍💼","👨‍🔬","👩‍🔬","👨‍💻","👩‍💻","👨‍🎤","👩‍🎤","👨‍🎨","👩‍🎨","👨‍🚀","👩‍🚀","👨‍🚒","👩‍🚒","👮‍","👮‍","🕵️‍","🕵️‍","💂‍","💂‍","👷‍","👷‍","🤴","👸",
// "🤳","💪","👈","👉","👆","🖕","👇","🤞","✌","🖖","🤘","🤙","🖐️","✋","👌","👍","👎","✊","👊","🤛","🤜","🤚","👋","🤟",
// "👏","👐","🙌","🤲","🙏","🤝","🤏","👂","🦻","👃","👀","👁️","🦾","🦿","🧠","👅","🦷","👄","💋"];
  
// for (let i=0; i<arr.length; i++) console.log(arr[i]);

export default Stats;


