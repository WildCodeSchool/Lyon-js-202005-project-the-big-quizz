import React from 'react';
import './App.css';
import NbPlayer from "./components/NbPlayers";
import QuestionOfTheDay from "./components/QuestionOfTheDay"; 

function App() {
  return (
    <div className="App">
     
     <NbPlayer />
     <QuestionOfTheDay />

    </div>
  );
}

export default App;
