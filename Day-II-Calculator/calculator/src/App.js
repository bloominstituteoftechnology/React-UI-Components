import React, { Component } from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="calculator-container">
        <CalculatorDisplay />
        <ButtonContainer className="clear-btn">
          <ActionButton className="action-text" text="clear" />
          <NumberButton text="÷" bgColor="maroon" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton text="7" bgColor="number" />
          <NumberButton text="8" bgColor="number" />
          <NumberButton text="9" bgColor="number" />
          <NumberButton text="x" bgColor="maroon" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton text="4" bgColor="number" />
          <NumberButton text="5" bgColor="number" />
          <NumberButton text="6" bgColor="number" />
          <NumberButton text="-" bgColor="maroon" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton text="1" bgColor="number" />
          <NumberButton text="2" bgColor="number" />
          <NumberButton text="3" bgColor="number" />
          <NumberButton text="+" bgColor="maroon" />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton text="0" className="action-text" />
          <NumberButton text="=" bgColor="maroon" />
        </ButtonContainer>
      </div>
    );
  }
}

export default App;
