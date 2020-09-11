import React from "react";
import Header from "./Header";
// import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

import "../App.css";

function GridLayout(props) {
  // console.log("props de Gridlayout:", props);

  return (
    <div className="gridLayout">
      <Header />

      {/*<Nav gameParameters={props.gameParameters} />*/}

      <Main gameParameters={props.gameParameters} />

      <Footer />
    </div>
  );
}

export default GridLayout;
