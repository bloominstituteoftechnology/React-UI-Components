import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
      <h1>0</h1>
      <CalculatorDisplay />
    </div>
  );
};

export default App;