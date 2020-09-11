import React from "react";
import { Link } from "react-router-dom";
import QuestionOfTheDay from "./QuestionOfTheDay";
import { Button } from 'reactstrap';
// import { useState } from "react";
import  logo  from "../images/Logo.png";


function Home(props) {
  

    // }else if (categorys === "Entertainment: Cartoon & Animations"){



  return (
  
      <div>
        <img src={logo} alt="Logo squizer" />
      <QuestionOfTheDay/>
      <Link to="/Parameters">
      <Button className="largeBtn"color="primary" size="lg" block>Start to play</Button>
      </Link>
      <br/>
      </div>
    
     
  );
}

export default Home;
