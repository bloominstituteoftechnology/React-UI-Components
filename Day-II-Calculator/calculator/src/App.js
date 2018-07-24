import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

const App = () => {
  return (
    <div className="calculator-container">
    <CalculatorDisplay />
    <ButtonContainer>
    </ButtonContainer>

    </div>
  );
};

export default App;
