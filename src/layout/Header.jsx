
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import WorkingMenu from "../components/WorkingMenu";
import "../App.css";
import '../images/Logo.png';



function Header(props) {
  return(
    <div className="header">
      <WorkingMenu/>
    </div>  
  )
}

export default Header;