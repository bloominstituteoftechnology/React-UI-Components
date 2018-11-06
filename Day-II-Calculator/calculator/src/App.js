import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className = 'app'>
    
    <div>
      <CalculatorDisplay />
    </div>
    
    <div>
      <ActionButton name="clear" />
      <NumberButton buttonStyles = "red" name="÷" />
    </div>
    
    <div>
      <NumberButton name="7" />
      <NumberButton name="8" />
      <NumberButton name="9" />
      <NumberButton buttonStyles = "red" name="x" />
    </div>

    <div>
      <NumberButton name="4" />
      <NumberButton name="5" />
      <NumberButton name="6" />
      <NumberButton buttonStyles = "red" name="-" />
    </div>

    <div>
      <NumberButton name="1" />
      <NumberButton name="2" />
      <NumberButton name="3" />
      <NumberButton buttonStyles = "red" name="+" />
    </div>

    <div>
      <ActionButton name="0" />
      <NumberButton buttonStyles = "red" name="=" />
    </div>

    </div>
  );
};

export default App;
