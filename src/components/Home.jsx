import React from "react";
import { Link } from "react-router-dom";
import QuestionOfTheDay from "./QuestionOfTheDay";
import  logo  from "../images/Logo.png";
import { Button } from 'reactstrap';

function Home() {
  return (
    <div>
      <img src={logo} alt="Logo squizer" />
      <QuestionOfTheDay />
      <Link to="/Parameters">
        <Button className="largeBtn"color="primary" size="lg" block>Start to play</Button>
      </Link>
      <br/>
    </div>
  );
}

export default Home;
