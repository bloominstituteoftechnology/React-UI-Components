import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="app">
      <div className="blackbox">0</div>
      <CalculatorDisplay/>
    </div>
  );
};

export default App;
