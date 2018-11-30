import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";



const App = () => {
  return (
    <div className="container">
      <div className="display">
        <CalculatorDisplay />
      </div>

      <div className="rowOne">
        <ActionButton name='Clear'/>
        <NumberButton name='&#247;' extraStyle="redBtn"/>
      </div>
      <div className="rowTwo">
        <NumberButton name='7'/>
        <NumberButton name='8'/>
        <NumberButton name='9'/>
        <NumberButton name='X' extraStyle="redBtn"/>
      </div>
      <div className="rowThree">
        <NumberButton name='4'/>
        <NumberButton name='5'/>
        <NumberButton name='6'/>
        <NumberButton name='-' extraStyle="redBtn"/>
      </div>
      <div className="rowFour">
        <NumberButton name='1' extraStyle="redBtn"/>
        <NumberButton name='2'/>
        <NumberButton name='3'/>
        <NumberButton name='+'/>  
      </div>
      <div className="rowFive">
        <ActionButton name='0'/>
        <NumberButton name='=' extraStyle="redBtn"/>
      </div>
    </div>
  );
};

export default App;
