import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
const App = () => {
  return (
    <div className="app-wrapper">
      <CalculatorDisplay total="0"/>
    </div>
  );
};

export default App;
