import React from "react";

function Stats(props) {
  // console.log("props de Stats",props);


let testQuiz =[
  {category: "Entertainment: Video Games",
  correct_answer: "David",
  difficulty: "medium",
  incorrect_answers: ["Solid Snake", "John", "Huey"],
  question: "What is Solid Snake&#039;s real name?",
  type: "multiple"},

  {category: "Entertainment: Video Games",
  correct_answer: "David",
  difficulty: "medium",
  incorrect_answers: ["Solid Snake", "John", "Huey"],
  question: "What is Solid Snake&#039;s real name?",
  type: "multiple"},

  {category: "Entertainment: Video Games",
  correct_answer: "David",
  difficulty: "medium",
  incorrect_answers: ["Solid Snake", "John", "Huey"],
  question: "What is Solid Snake&#039;s real name?",
  type: "multiple"},

  {category: "Entertainment: Video Games",
  correct_answer: "David",
  difficulty: "medium",
  incorrect_answers: ["Solid Snake", "John", "Huey"],
  question: "What is Solid Snake&#039;s real name?",
  type: "multiple"},

  {category: "Entertainment: Video Games",
  correct_answer: "David",
  difficulty: "medium",
  incorrect_answers: ["Solid Snake", "John", "Huey"],
  question: "What is Solid Snake&#039;s real name?",
  type: "multiple"},

  {category: "Entertainment: Video Games",
  correct_answer: "David",
  difficulty: "medium",
  incorrect_answers: ["Solid Snake", "John", "Huey"],
  question: "What is Solid Snake&#039;s real name?",
  type: "multiple"},


]



let testScore =  [
 [ [0, true, 0, 8 ], [2, false, 1, 8 ], [4, true, 0, 7 ]]
 [ [1, true, 0, 10 ], [3, true, 0, 15 ], [5, false, 2, 5 ]]
];




  return (
    <div>
      <h1>Stats</h1>

    </div>
  );
}

export default Stats;


/*


category: "History"
correct_answer: "1789"
difficulty: "hard"
incorrect_answers: (3) ["1823", "1756", "1799"]
question: "When did the French Revolution begin?"
type: "multiple"
__proto__: Object


category: "Entertainment: Music"
correct_answer: "Tommy Moore"
difficulty: "hard"
incorrect_answers: (3) ["Ringo Starr", "Stuart Sutcliffe", "Pete Best"]
question: "Who was the original drummer for The Beatles?"
type: "multiple"
__proto__: Object
2:
category: "General Knowledge"
correct_answer: "False"
difficulty: "medium"
incorrect_answers: ["True"]
question: "The vapor produced by e-cigarettes is actually water."
type: "boolean"
__proto__: Object
3:
category: "Politics"
correct_answer: "True"
difficulty: "easy"
incorrect_answers: ["False"]
question: "There was a satirical candidate named &quot;Deez Nuts&quot; running in the 2016 US presidential elections."
type: "boolean"
__proto__: Object
4:
category: "Mythology"
correct_answer: "Poseidon"
difficulty: "medium"
incorrect_answers: (3) ["Ares", "Zeus", "Apollo"]
question: "Neptune&#039;s greek name was..."
type: "multiple"
__proto__: Object
5:
category: "Entertainment: Books"
correct_answer: "Richard Bachman"
difficulty: "easy"
incorrect_answers: (3) ["J. D. Robb", "Mark Twain", "Lewis Carroll"]
question: "Under what pseudonym did Stephen King publish five novels between 1977 and 1984?"
type: "multiple"
__proto__: Object
6:
category: "Science & Nature"
correct_answer: "Vitrainium"
difficulty: "hard"
incorrect_answers: (3) ["Praseodymium", "Hassium", "Lutetium"]
question: "Which of the following is NOT a real element?"
type: "multiple"
__proto__: Object
7:
category: "Entertainment: Books"
correct_answer: "A Study in Scarlet"
difficulty: "easy"
incorrect_answers: (3) ["The Sign of the Four", "A Case of Identity", "The Doings of Raffles Haw"]
question: "What is the title of the first Sherlock Holmes book by Arthur Conan Doyle?"
type: "multiple"
__proto__: Object
8:
category: "Politics"
correct_answer: "George W. Bush"
difficulty: "hard"
incorrect_answers: (3) ["John Kerry", "Barack Obama", "Al Gore"]
question: "&quot;Yes, America Can!&quot; was this United States politician&#039;s de facto campaign slogan in 2004."
type: "multiple"
__proto__: Object
9:
category: "General Knowledge"
correct_answer: "Southeast"
difficulty: "medium"
incorrect_answers: (3) ["Southwest", "Northwest", "Northeast"]
question: "What direction does the Statue of Liberty face?"
type: "multiple"
__proto__: Object
10:
category: "Geography"
correct_answer: "Kashmir"
difficulty: "medium"
incorrect_answers: (3) ["Andorra", "Gibraltar", "Quin"]
question: "What is the region conjoining Pakistan, India, and China with unknown leadership called?"
type: "multiple"
__proto__: Object
11:
category: "Entertainment: Video Games"
correct_answer: "True"
difficulty: "medium"
incorrect_answers: ["False"]
question: "In the video game &quot;Transistor&quot;, &quot;Red&quot; is the name of the main character."
type: "boolean"
__proto__: Object
12:
category: "Entertainment: Video Games"
correct_answer: "HRL-7"
difficulty: "medium"
incorrect_answers: (3) ["Heavy Crossbow", "Thanatos .50 cal", "Broomstick Pistol"]
question: "In &quot;PAYDAY 2&quot;, what weapon has the highest base weapon damage on a per-shot basis?"
type: "multiple"
__proto__: Object
13:
category: "Entertainment: Japanese Anime & Manga"
correct_answer: "Reiner Braun"
difficulty: "easy"
incorrect_answers: (3) ["Armin Arlelt", "Mikasa Ackermann", "Eren Jaeger"]
question: "Who is the armored titan in &quot;Attack On Titan&quot;?"
type: "multiple"
__proto__: Object
14:
category: "Entertainment: Film"
correct_answer: "2005"
difficulty: "hard"
incorrect_answers: (3) ["2007", "2015", "2020"]
question: "In what year does Jurassic World open in the &quot;Jurassic Park&quot; universe?"
type: "multiple"
__proto__: Object
15:
category: "Science & Nature"
correct_answer: "Hydrogen &amp; Helium"
difficulty: "medium"
incorrect_answers: (3) ["Hydrogen &amp; Nitrogen", "Carbon &amp; Nitrogen", "Carbon &amp; Helium"]
question: "The Sun consists of mostly which two elements?"
type: "multiple"
__proto__: Object
16:
category: "Entertainment: Television"
correct_answer: "Richard &quot;Dick&quot; Whitman"
difficulty: "easy"
incorrect_answers: (3) ["Donald Draper", "John Ashbury", "Michael &quot;Mikey&quot; Wilhelm"]
question: "In the TV show &quot;Mad Men&quot;, what was Donald Draper&#039;s birthname?"
type: "multiple"
__proto__: Object
17:
category: "Entertainment: Video Games"
correct_answer: "Gradius"
difficulty: "medium"
incorrect_answers: (3) ["Contra", "Castlevania", "Dance Dance Revolution"]
question: "In which game did the Konami Code make its first appearance?"
type: "multiple"
__proto__: Object
18:
category: "Entertainment: Video Games"
correct_answer: "Donkey Kong"
difficulty: "easy"
incorrect_answers: (3) ["Mario", "Kirby", "Zelda"]
question: "Lanky, Funky, and Chunky are all characters featured in which series owned by Nintendo?"
type: "multiple"
__proto__: Object
19:
category: "Entertainment: Film"
correct_answer: "San Francisco"
difficulty: "medium"
incorrect_answers: (3) ["Los Angeles", "Sacramento", "San Jose"]
question: "Which town is the setting for the Disney movie The Love Bug (1968)?"
type: "multiple"
__proto__: Object
20:
category: "Entertainment: Comics"
correct_answer: "Mr. Bun"
difficulty: "medium"
incorrect_answers: (3) ["Mr. Bunbun", "Mr. Rabbit", "Mr. Hoppy"]
question: "In Calvin and Hobbes, what is the name of Susie&#039;s stuffed rabbit?"
type: "multiple"
__proto__: Object
21:
category: "Entertainment: Video Games"
correct_answer: "Genocide City Zone"
difficulty: "medium"
incorrect_answers: (3) ["Stardust Speedway Zone", "Sky High Zone ", "Clockwork Zone"]
question: "Which stage was planned to be a part of &quot;Sonic the Hedgehog 2&quot;, but was scrapped during development?"
type: "multiple"
__proto__: Object
22:
category: "General Knowledge"
correct_answer: "15%"
difficulty: "hard"
incorrect_answers: (3) ["20%", "10%", "25%"]
question: "In &quot;Battle Cats&quot;, what is Moneko / MISS Moneko&#039;s critical percentage rate?"
type: "multiple"
__proto__: Object
23:
category: "Entertainment: Video Games"
correct_answer: "False"
difficulty: "easy"
incorrect_answers: ["True"]
question: "There are 2 player roles in Trouble in Terrorist Town."
type: "boolean"
__proto__: Object
length: 24
__proto__: Array(0)


*/