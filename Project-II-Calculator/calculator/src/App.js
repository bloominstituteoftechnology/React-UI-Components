import React from 'react';
import './App.css';
import NumberContainer from "./components/ButtonComponents/NumberContainer";
import OperatorContainer from "./components/ButtonComponents/OperatorContainer";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";


const App = () => {
  return (
    <div className="app">
      <div>
        <CalculatorDisplay displayValue="0"/>
      </div>
      <div className="row">
        <NumberContainer/>
        <OperatorContainer buttonStyle="red"/>
      </div>
    </div>
  );
};

export default App;
