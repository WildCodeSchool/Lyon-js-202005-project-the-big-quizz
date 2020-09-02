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
      correct_answer: "Hydrogen &amp; Helium",
      difficulty: "medium",
      incorrect_answers: [
        "Hydrogen &amp; Nitrogen",
        "Carbon &amp; Nitrogen",
        "Carbon &amp; Helium",
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
    [
      [0, true, 0, 8],
      [6, false, 1, 8],
      [12, true, 0, 7],
      [18, true, 0, 7],
    ],
    [
      [1, true, 0, 10],
      [7, true, 0, 15],
      [13, false, 2, 5],
      [19, true, 0, 7],
    ],
    [
      [2, true, 0, 8],
      [8, false, 1, 8],
      [14, true, 0, 7],
      [20, true, 0, 7],
    ],
    [
      [3, true, 0, 10],
      [9, true, 0, 15],
      [15, false, 2, 5],
      [21, true, 0, 7],
    ],
    [
      [4, false, 1, 8],
      [10, false, 1, 8],
      [16, false, 1, 7],
      [22, false, 0, 7],
    ],
    [
      [5, true, 0, 10],
      [11, true, 0, 15],
      [17, true, 0, 5],
      [23, true, 0, 7],
    ],
  ];

  // scores.map((player, indexPlayer) =>   {console.log("player "+ (indexPlayer + 1)+" "+ player[1])}) ;

  return (
    <div>
      <h1>Stats</h1>
      <div>
        {scores.map((player, indexPlayer) => (
          <div key={indexPlayer}>
            <b>player {indexPlayer + 1} :</b>

            {player.map((question, indexQuestion) => (
              <div key={indexQuestion}>
                {" "}
                player {indexPlayer + 1} - question {indexQuestion + 1} -{" "}
                {quiz[scores[indexPlayer][indexQuestion][0]].question} <br />
                {scores[indexPlayer][indexQuestion][1]
                  ? "bonne réponse"
                  : "mauvaise réponse"}{" "}
                <br />
                
                <p className="correctAnswer">
                  {quiz[scores[indexPlayer][indexQuestion][0]].correct_answer}
                </p>
                {quiz[
                  scores[indexPlayer][indexQuestion][0]
                ].incorrect_answers.map((wrongAnswer, index) => (
                  <p
                    key={index}
                    className={
                      scores[indexPlayer][indexQuestion][2] === index &&
                      !scores[indexPlayer][indexQuestion][1]
                        ? "badAnswer"
                        : ""
                    }
                  >
                    {wrongAnswer}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
