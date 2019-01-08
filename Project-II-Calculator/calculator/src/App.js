import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import MathFunctionButton from './components/ButtonComponents/MathFunctionButton';
// import AllButtons from './components/ButtonComponents/AllButtons';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

 

const App = () => {
  return (
    <div className="calculator">
      
      <CalculatorDisplay />
      
      <ActionButton buttonStyle={"actionButton"} text={"clear"}/>
      <MathFunctionButton buttonStyle={"mathFunction"} text={"÷"}/>

      <NumberButton buttonStyle={"numberButton"} text={"7"}/>
      <NumberButton buttonStyle={"numberButton"} text={"8"}/>
      <NumberButton buttonStyle={"numberButton"} text={"9"}/>
      <MathFunctionButton buttonStyle={"mathFunction"} text={"x"}/>
      
      <NumberButton buttonStyle={"numberButton"} text={"4"}/>
      <NumberButton buttonStyle={"numberButton"} text={"5"}/>
      <NumberButton buttonStyle={"numberButton"} text={"6"}/>
      <MathFunctionButton buttonStyle={"mathFunction"} text={"-"}/>

      <NumberButton buttonStyle={"numberButton"} text={"1"}/>
      <NumberButton buttonStyle={"numberButton"} text={"2"}/>
      <NumberButton buttonStyle={"numberButton"} text={"3"}/>  
      <MathFunctionButton buttonStyle={"mathFunction"} text={"+"}/>
      
      <ActionButton buttonStyle={"actionButton"} text={"0"}/>
      <MathFunctionButton buttonStyle={"mathFunction"} text={"="}/>
      
    </div>
  );
};

export default App;
