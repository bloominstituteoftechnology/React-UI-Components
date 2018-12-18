import React from "react";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";
import OperatorButtons from "./components/ButtonComponents/OperatorButtons";
import "./App.css";

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const App = _ => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <ButtonContainer numbers={numbers} />
      <OperatorButtons />
    </div>
  );
};

export default App;
