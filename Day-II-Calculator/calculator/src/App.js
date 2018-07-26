import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render(){
    return (
      <div className="calculatorContainer">
        <CalculatorDisplay />
        <ButtonContainer>
          <ActionButton text="clear" />
          <NumberButton buttonStyle="redButton align" text="/" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <NumberButton buttonStyle="redButton align" text="X" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <NumberButton buttonStyle="redButton align" text="-" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <NumberButton buttonStyle="redButton align" text="+" />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton text="0" />
          <NumberButton buttonStyle="redButton align" text="=" />
        </ButtonContainer>
      </div>
    );
  }
};

export default App;
