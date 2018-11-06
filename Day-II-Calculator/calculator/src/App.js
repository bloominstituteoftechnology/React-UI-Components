import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import OperatorButton from './components/ButtonComponents/OperatorButton';

const App = () => {
  return (
    <div className="calculator-container">
      <Display />
      <NumberButton />
      <OperatorButton />
    </div>
  );
};

export default App;
