import React from "react";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";
import "./App.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const App = _ => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <ButtonContainer numbers={numbers} />
    </div>
  );
};

export default App;
