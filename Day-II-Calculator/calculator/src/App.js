import React from 'react';
import './App.css';
import CalculatorDisplay from '.components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator">
      <div className="display">
        <CalculatorDisplay />
      </div>
      <div className="buttons">
        <NumberButton buttonStyle="reg-long" text="clear" />
        <ActionButton buttonStyle="red" text="÷" />
        <NumberButton buttonStyle="reg" text="7" />
        <NumberButton buttonStyle="reg" text="8" />
        <NumberButton buttonStyle="reg" text="9" />
        <ActionButton buttonStyle="red" text="×" />
        <NumberButton buttonStyle="reg" text="4" />
        <NumberButton buttonStyle="reg" text="5" />
        <NumberButton buttonStyle="reg" text="6" />
        <ActionButton buttonStyle="red" text="-" />
        <NumberButton buttonStyle="reg" text="1" />
        <NumberButton buttonStyle="reg" text="2" />
        <NumberButton buttonStyle="reg" text="3" />
        <ActionButton buttonStyle="red" text="+" />
        <NumberButton buttonStyle="reg-long" text="0" />
        <ActionButton buttonStyle="red" text="=" />
      </div>
    </div>

  );
};


export default App;
