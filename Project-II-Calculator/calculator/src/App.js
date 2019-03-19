import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";

const App = () => {
  return (
    <div className="container">
      <div className="calc-display">
        <CalculatorDisplay />
      </div>
      <div className="btn-container">
        <ButtonContainer />
      </div>
    </div>
  );
};

export default App;
