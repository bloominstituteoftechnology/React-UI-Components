import React from 'react';
import './App.css';
import ActionButton from "./components/ButtonComponents/ActionButton";
import OperatorButton from "./components/ButtonComponents/OperatorButton";
import CalculatorDisplay from "./components/ButtonComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";


const App = () => {
  return (
    <div className = "app-container">
      <CalculatorDisplay />

      <div className = "numbers-and-clear-container">
        <ActionButton/>
        <NumberButton/>
      </div>

      <OperatorButton/>

    </div>
  );
};

export default App;
