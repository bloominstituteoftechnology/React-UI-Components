import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calc-body">
      <CalculatorDisplay value="0" />
    </div>
  );
};

export default App;
