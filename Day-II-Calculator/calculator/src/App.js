import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render() {
    return (
      <div className="calc-wrapper">
        <CalculatorDisplay />
        <ButtonContainer className="clear-button">
          <ActionButton className="three-text" />
          <NumberButton />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton />
          <NumberButton />
          <NumberButton />
          <NumberButton />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton />
          <NumberButton />
          <NumberButton />
          <NumberButton />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton />
          <NumberButton />
          <NumberButton />
          <NumberButton />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="three-text" />
          <NumberButton />
        </ButtonContainer>
      </div>
    );
  }
}

export default App;
