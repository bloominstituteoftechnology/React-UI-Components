import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="container-wrapper">
      <CalculatorDisplay />
      <div className="button-container">
        <ActionButton className="clear-text" text="clear" />
        <NumberButton className="red-button" text="&#xf7;" />
      </div>
      <div className="button-container">
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <NumberButton className="red-button" text="&#xd7;" />
      </div>
      <div className="button-container">
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <NumberButton className="red-button" text="&#x2212;" />
      </div>
      <div className="button-container">
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <NumberButton className="red-button" text="&#x2b;" />
      </div>
      <div className="button-container">
        <ActionButton className="number-text" text="0"/>
        <NumberButton className="red-button" text="&#x3d;" />
      </div>
    </div>
  );
};

export default App;
