import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay />
      <div>
        <NumberButton buttonStyle='operator' symbol='÷' />
        <NumberButton buttonStyle='operator' symbol='÷' />
      </div>
      <div>
        <NumberButton buttonStyle='digit' symbol='÷' />
        <NumberButton buttonStyle='digit' symbol='÷' />
        <NumberButton buttonStyle='digit' symbol='÷' />
        <NumberButton buttonStyle='operator' symbol='÷' />
      </div>
    </div>
  );
};

export default App;
