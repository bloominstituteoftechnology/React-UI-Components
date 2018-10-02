import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <NumberButton />
    </div>
  );
};

export default App;
