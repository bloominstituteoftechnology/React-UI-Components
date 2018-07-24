import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay />
      <div>
        <NumberButton buttonStyle='digit' symbol='÷'/>
      </div>

    </div>
  );
};

export default App;
