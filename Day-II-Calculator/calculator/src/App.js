import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className="container">
    <CalculatorDisplay text="0"/>
    <div className="row">
    <ActionButton buttonStyle="action clear" text='clear' />
    <NumberButton text="÷"/>
    </div>
    
    <div className="row">
    <NumberButton text="7" />
    <NumberButton text="8" />
    <NumberButton text="9" />
    <NumberButton text="x" buttonStyle="red"/>
    </div>
    <div className="row">
    <NumberButton text="4" />
    <NumberButton text="5" />
    <NumberButton text="6" />
    <NumberButton text="−" buttonStyle="red"/>
    </div>
    <div className="row">
    <NumberButton text="1" />
    <NumberButton text="2" />
    <NumberButton text="3" />
    <NumberButton text="+" buttonStyle="red"/>
    </div>
    <div className="row">
    <ActionButton buttonStyle="action" text='zero' />
    <NumberButton text="="/>
    </div>

    

    </div>
  );
};

export default App;
