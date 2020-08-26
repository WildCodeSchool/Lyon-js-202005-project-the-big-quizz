import React from "react";
import Header from "./Header"
import Nav from "./Nav"
import Main from "./Main"
import Footer from "./Footer"

import "../App.css";

function GridLayout(){
  return (<div className="gridLayout">



  
  <Header/>
  
  <Nav/>
  
  <Main/>
  
  <Footer/>
  
  </div>
  
  );
}

export default GridLayout;