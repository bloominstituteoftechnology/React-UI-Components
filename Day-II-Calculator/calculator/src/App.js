import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div>
    <CalculatorDisplay currentNumber={0} />
    </div>
  );
};

export default App;
