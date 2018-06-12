import React from 'react';
import './App.css';
import CalculationDisplay from './components/DisplayComponents/CalculationDisplay.js';

const App = () => {
  return (
    <div className="app">
      <CalculationDisplay value="0" />
    </div>
  );
};

export default App;
