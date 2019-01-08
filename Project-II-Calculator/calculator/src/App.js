import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import MathFunctionButton from './components/ButtonComponents/MathFunctionButton';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";



const App = () => {
  return (
    <div className="calculator">
      
      <CalculatorDisplay />
      <ActionButton buttonStyle={"actionButton"} text={"Clear"}/>
      <NumberButton buttonStyle={"numberButton"} text={"9"}/>
      <MathFunctionButton buttonStyle={"mathFunction"} text={"9"}/>
    </div>
  );
};

export default App;
