import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className = "calc-wrap">
      <CalculatorDisplay />

      <ButtonContainer className = "clear-button">
        <ActionButton className = "wide-btn" text = "clear" />
        <NumberButton bgColor = "red-btn" text = "/" />
      </ButtonContainer>

      <ButtonContainer>
        <NumberButton bgColor = "num-btn" text = "7" />
        <NumberButton bgColor = "num-btn" text = "8" />
        <NumberButton bgColor = "num-btn" text = "9" />
        <NumberButton bgColor = "red-btn" text = "X" />
      </ButtonContainer>

      <ButtonContainer>
        <NumberButton bgColor = "num-btn" text = "4" />
        <NumberButton bgColor = "num-btn" text = "5" />
        <NumberButton bgColor = "num-btn" text = "6" />
        <NumberButton bgColor = "red-btn" text = "-" />
      </ButtonContainer>

      <ButtonContainer>
        <NumberButton bgColor = "num-btn" text = "1" />
        <NumberButton bgColor = "num-btn" text = "2" />
        <NumberButton bgColor = "num-btn" text = '3' />
        <NumberButton bgColor = "red-btn" text = "+" />
      </ButtonContainer>

      <ButtonContainer>
        <ActionButton className = "wide-btn" text = "0" />
        <NumberButton bgColor = "red-btn" text = "=" />
      </ButtonContainer>
      
    </div>
  );
};

export default App;
