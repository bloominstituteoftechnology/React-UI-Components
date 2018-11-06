import React from 'react';
import './App.css';
import ButtonContainer from './components/ButtonComponents/ButtonContainer.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay />
      <ButtonContainer />
    </div>
  );
};

export default App;
