import React, {useState} from "react";
import "./App.css";

import GridLayout from "./layout/GridLayout";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Nav from "./layout/Nav";
import Header from "./layout/Header";

import NbPlayer from "./components/NbPlayers.jsx";

function App() {
  const [parameters, setParameters] = useState({})


  return (
    <div className="App">
      <GridLayout>
        <Header />
        <Nav/>
        <Main>
          <NbPlayer />
        </Main>
        <Footer />
      </GridLayout>
    </div>
  );
}

export default App;
