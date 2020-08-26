import React from 'react';
import { Link } from 'react-router-dom';

function Home (){

    

    return (
        <div>
<h1>Home</h1>
<p>question du jour</p>
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