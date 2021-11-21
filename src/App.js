import React from "react";
import GeradorDeLeroLero from "./components/GeradorDeLeroLero";
import Contador from  "./components/Contador";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Gerador de lero lero</h1>

      <GeradorDeLeroLero />
      <Contador />
    </div>
  );
}

export default App;
