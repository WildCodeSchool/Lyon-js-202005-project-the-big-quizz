import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>question du jour</p>
      <Link to="/parameters">
        <button>paramétrer le jeu</button>
      </Link>
    </div>
  );
}

export default Home;
