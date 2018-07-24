import React from "react";
import "./App.css";
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="main-container">
    <div className="title">
      <h1>React Calculator by Jared Cooper</h1>
      <div className="calculator-container" />
      <CalculatorDisplay />
      <ActionButton />
      <NumberButton />>
    </div>
    </div>
  );
};

export default App;
