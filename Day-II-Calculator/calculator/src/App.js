import React from 'react';
import './App.css';
import CalculatorDisplayContainer from './components/DisplayComponents/CalculatorDisplay';
import NumberButtonsContainer from './components/ButtonComponents/NumberButton';
import ActionButtonsContainer from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className = "calculatorContainer">
      <div className = "displayContainer">
        <CalculatorDisplayContainer className = "calculatorDisplayContainer"/>
      </div>
      <div className = "buttonsContainer">
        <NumberButtonsContainer className = "numberButtonsContainer" />
        <ActionButtonsContainer className = "actionButtonsContainer" />
      </div>
    </div>
  );
};

export default App;
