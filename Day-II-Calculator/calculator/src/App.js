import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


let displayNumber = 0;

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
      <div className="calculator-container">
        <Display displayValue= {displayNumber}/>
        <div className="row1">
        <ActionButton text="clear"/>
        <NumberButton text="÷" buttonStyle="operator-button"/>
        </div>
        <div className="row2">
        <NumberButton text="7" buttonStyle="number-button"/>
        <NumberButton text="8" buttonStyle="number-button"/>
        <NumberButton text="9" buttonStyle="number-button"/>
        <NumberButton text="x" buttonStyle="operator-button"/>
        </div>
        <div className="row3">
        <NumberButton text="4" buttonStyle="number-button"/>
        <NumberButton text="5" buttonStyle="number-button"/>
        <NumberButton text="6" buttonStyle="number-button"/>
        <NumberButton text="-" buttonStyle="operator-button"/>
        </div>
        <div className="row4">
        <NumberButton text="1" buttonStyle="number-button"/>
        <NumberButton text="2" buttonStyle="number-button"/>
        <NumberButton text="3" buttonStyle="number-button"/>
        <NumberButton text="+" buttonStyle="operator-button"/>
        </div>
        <div className="row5">
        <ActionButton text="0"/>
        <NumberButton text="=" buttonStyle="operator-button"/>
        </div>
      </div>
    </div>


  );
};

export default App;
