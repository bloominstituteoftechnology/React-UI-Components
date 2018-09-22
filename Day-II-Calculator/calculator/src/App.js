import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="body">
      <h3>React Calculator</h3>
      <div id="container" className="flexChild columnParent">
        <div id="columnChild88293" className="flexChild selected" />

        <div id="columnChild52494" className="flexChild" />
      </div>
      <div>
        <CalculatorDisplay />
      </div>
      <div>
        <NumberButton />
        <ActionButton />
      </div>
    </div>
  );
};

export default App;
