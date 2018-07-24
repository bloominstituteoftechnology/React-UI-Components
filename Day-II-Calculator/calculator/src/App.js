import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator">
      <div className="display">
        <CalculatorDisplay />
      </div>
      <div className="buttons">
        <div className="row">
          <NumberButton extraStyle="reg-long" text="clear" />
          <ActionButton extraStyle="red-btn" text="÷" />
        </div>
        <div className="row">
          <NumberButton extraStyle="reg-btn" text="7" />
          <NumberButton extaStyle="reg-btn" text="8" />
          <NumberButton extraStyle="reg-btn" text="9" />
          <ActionButton extraStyle="red-btn" text="×" />
        </div>
        <div className="row">
          <NumberButton extraStyle="reg-btn" text="4" />
          <NumberButton extraStyle="reg-btn" text="5" />
          <NumberButton extraStyle="reg-btn" text="6" />
          <ActionButton extraStyle="red-btn" text="-" />
        </div>
        <div className="row">
          <NumberButton extraStyle="reg-btn" text="1" />
          <NumberButton extraStyle="reg-btn" text="2" />
          <NumberButton extraStyle="reg-btn" text="3" />
          <ActionButton extraStyle="red-btn" text="+" />
        </div>
        <div className="row">
          <NumberButton extraStyle="reg-long" text="0" />
          <ActionButton extraStyle="red-btn" text="=" />
        </div>
      </div>
    </div>

  );
};


export default App;
