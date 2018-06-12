import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      <CalculatorDisplay displayStyle="display"/>
      <div className="buttons-container">
        <div className="numbers-container">
          <ActionButton buttonStyle="action-button clear-button" name="clear"/>
          <div className="nine-numbers-container">
            <NumberButton buttonStyle="number-button" name="1"/>
            <NumberButton buttonStyle="number-button" name="2"/>
            <NumberButton buttonStyle="number-button" name="3"/>
            <NumberButton buttonStyle="number-button" name="4"/>
            <NumberButton buttonStyle="number-button" name="5"/>
            <NumberButton buttonStyle="number-button" name="6"/>
            <NumberButton buttonStyle="number-button" name="7"/>
            <NumberButton buttonStyle="number-button" name="8"/>
            <NumberButton buttonStyle="number-button" name="9"/>
          </div>
          <NumberButton buttonStyle="number-button zero-button" name="0"/>
        </div>
        <div className="actions-container">
          <ActionButton buttonStyle="action-button" name="&divide;"/>
          <ActionButton buttonStyle="action-button" name="&times;"/>
          <ActionButton buttonStyle="action-button" name="&minus;"/>
          <ActionButton buttonStyle="action-button" name="&#x2b;"/>
          <ActionButton buttonStyle="action-button" name="&#x3d;"/>
        </div>
      </div>
    </div>
  );
};

export default App;
