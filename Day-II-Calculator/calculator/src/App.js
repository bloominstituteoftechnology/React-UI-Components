import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  const data = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    equals: false,
    plus: false,
    subtract: false,
    multiple: false,
    divide: false,
    clear: false,
    display: '3 + 6',
  }
  return (
    <div className="calculator">
      <CalculatorDisplay text={data.display}/>
      <div className="row">
        <ActionButton text="clear" buttonStyle="button white big"/>
        <NumberButton text="÷" buttonStyle="signs red small"/>
      </div>
      <div className="row">
        <NumberButton text="7" buttonStyle="button white small"/>
        <NumberButton text="8" buttonStyle="button white small"/>
        <NumberButton text="9" buttonStyle="button white small"/>
        <NumberButton text="×" buttonStyle="signs red small"/>
      </div>
      <div className="row">
        <NumberButton text="4" buttonStyle="button white small"/>
        <NumberButton text="5" buttonStyle="button white small"/>
        <NumberButton text="6" buttonStyle="button white small"/>
        <NumberButton text="-" buttonStyle="signs red small"/>
      </div>
      <div className="row">
        <NumberButton text="1" buttonStyle="button white small"/>
        <NumberButton text="2" buttonStyle="button white small"/>
        <NumberButton text="3" buttonStyle="button white small"/>
        <NumberButton text="+" buttonStyle="signs red small"/>
      </div>
      <div className="row">
        <ActionButton text="0" buttonStyle="button white big"/>
        <NumberButton text="=" buttonStyle="signs red small"/>
      </div>
    </div>
  );
};

export default App;
