import React from 'react';
import './App.css';
import NbPlayer from "./components/NbPlayers";
import GameParameters from './components/GameParameters';

function App() {
  return (
    <div className="App">
     
     <NbPlayer />
    <GameParameters/>
    </div>
  );
}

export default App;
