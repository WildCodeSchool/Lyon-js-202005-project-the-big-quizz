import React from 'react';
import { Link } from 'react-router-dom';


function WorkingMenu(props) {
  
  return (
    <div>
      <nav>
        <div>
            <p>Working Menu</p>
          <span><Link to="/">Home</Link></span><span> | </span>
          <span><Link to="/parameters">Parameters</Link></span><span> | </span>
          <span><Link to="/game">Game</Link></span><span> | </span>
          <span><Link to="/stats">Stats</Link></span><span> | </span>

        </div>
      </nav>
      <div>

      </div>
    </div>
  )
}



export default WorkingMenu;