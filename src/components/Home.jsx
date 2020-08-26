import React from 'react';
import { Link } from 'react-router-dom';
import QuestionOfTheDay from "./QuestionOfTheDay";

function Home (){

    

    return (
        <div>
<h1>Home</h1>
<QuestionOfTheDay />
<Link to="/Parameters"><button>paramétrer le jeu</button></Link>
 
        </div>
    );
}

export default Home;


/*

<Link to='/somewhere'>
    <Button>
          My button linked to react-router-dom
    </Button>
</Link>



*/