import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
const App = () => {
  return (
    <div class="container">
    <CalculatorDisplay />
      <div class="container-input">
        <div class="left-side">
          <div class="action-buttons">
            <ActionButton buttonStyle="action-button" text="clear"/>
          </div>
          <div className="number-buttons">
            <NumberButton buttonStyle="number-button" number="7"/>
            <NumberButton buttonStyle="number-button" number="8"/>
            <NumberButton buttonStyle="number-button" number="9"/>
            <NumberButton buttonStyle="number-button" number="4"/>
            <NumberButton buttonStyle="number-button" number="5"/>
            <NumberButton buttonStyle="number-button" number="6"/>
            <NumberButton buttonStyle="number-button" number="1"/>
            <NumberButton buttonStyle="number-button" number="2"/>
            <NumberButton buttonStyle="number-button" number="3"/>
          </div>
          <div className="action-buttons">
            <ActionButton buttonStyle="action-button action-button-bold" text="0"/>
          </div>
        </div>
        <div class="right-side">
          <NumberButton buttonStyle="math-button" number="÷"/>
          <NumberButton buttonStyle="math-button" number="×"/>
          <NumberButton buttonStyle="math-button" number="−"/>
          <NumberButton buttonStyle="math-button" number="+"/>
          <NumberButton buttonStyle="math-button" number="="/>
        </div>
    </div>
  </div>
  );
};

export default App;