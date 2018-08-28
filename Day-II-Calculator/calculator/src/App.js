import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import './App.css';

const App = () => {
  return (
    <div className="calculator-container">
      <div className="display">
        <CalculatorDisplay buttonStyle="calculator-display" text="0"/>
      </div>
        <ButtonContainer />
    </div>
  );
};

export default App;
