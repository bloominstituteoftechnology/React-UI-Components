import React from 'react';
import './App.css';
import ActionButtons from './components/ButtonComponents/ActionButton.js';
import NumberButtons from './components/ButtonComponents/NumberButton.js';
import Display from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className="calculator">
      <Display />
      <div className="main">
        <ActionButtons />
        <NumberButtons />
      </div>
    </div>
  );
};

export default App;
