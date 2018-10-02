import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';


const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <ActionButton />
      <NumberButton />
      <ActionButton />
    </div>
  );
};

export default App;
