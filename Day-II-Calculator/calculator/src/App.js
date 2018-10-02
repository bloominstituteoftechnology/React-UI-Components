import React from 'react';
import './App.css'
import NumberButton from ".\components\ButtonComponents\NumberButton";
import ActionButton from ".\components\ButtonComponents\ActionButton.js";
import CalculatorDisplay from ".\components\DisplayComponents\CalculatorDisplay.js";


const App = () => {


return (

    <div className="wrapper">  //wrapper 
    <div>
      <div>
        <CalculatorDisplay number="0" />
      </div> 
      
    </div>
    <div className="row">
      <ActionButton text="clear" buttonStyle="wide" />
      <ActionButton text="/" buttonStyle="redButton" />
    </div>

    <div className="row">
      <div>
        <NumberButton text="1" buttonStyle="buttonStyle numberButton" />
      </div>
      <div>
        <NumberButton text="2" />
      </div>
      <div>
        <NumberButton text="3" />
      </div>
      <div>
        <ActionButton text="x" buttonStyle="redButton" />
      </div>
    </div>

    <div className="row">
      <div>
        <NumberButton text="4" />
      </div>
      <div>
        <NumberButton text="5" />
      </div>
      <div>
        <NumberButton text="6" />
      </div>
      <div>
        <ActionButton text="-" buttonStyle="redButton" />
      </div>
    </div>

    <div className="row">
      <div>
        <NumberButton text="7" />
      </div>
      <div>
        <NumberButton text="8" />
      </div>
      <div>
        <NumberButton text="9" />
      </div>
      <div>
        <ActionButton text="+" buttonStyle="redButton" />
      </div>
    </div>
    <div className="row">
      <div>
        <NumberButton text="0" buttonStyle="wide" />
      </div>
      <div>
        <ActionButton text="=" buttonStyle="redButton" />
      </div>
    </div>
  </div>



);


};



export default App;
 