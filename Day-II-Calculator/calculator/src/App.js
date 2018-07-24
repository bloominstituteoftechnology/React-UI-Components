import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator-wrapper" >
      <CalculatorDisplay />
    </div>
  );
};

export default App;
