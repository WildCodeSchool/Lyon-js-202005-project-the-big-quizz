
import React from 'react';
import './App.css';
import NbPlayer from "./components/NbPlayers";
import GridLayout from "./layout/GridLayout";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Nav from "./layout/Nav";
import Header from "./layout/Header";


function App() {
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
