import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

/* Realized that I was using class component here which is a day ahead
class App extends React.Component {
  render() {
    return (
      <div className="calc-wrapper">
        <CalculatorDisplay />
        <ButtonContainer className="clear-button">
          <ActionButton className="three-text" text="clear"/>
          <NumberButton bcolor="red-button" text="/"/>
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bcolor="numpad-button" text="7"/>
          <NumberButton bcolor="numpad-button" text="8"/>
          <NumberButton bcolor="numpad-button" text="9"/>
          <NumberButton bcolor="red-button" text="x"/>
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bcolor="numpad-button" text="4"/>
          <NumberButton bcolor="numpad-button" text="5"/>
          <NumberButton bcolor="numpad-button" text="6"/>
          <NumberButton bcolor="red-button" text="-"/>
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bcolor="numpad-button" text="1"/>
          <NumberButton bcolor="numpad-button" text="2"/>
          <NumberButton bcolor="numpad-button" text="3"/>
          <NumberButton bcolor="red-button" text="+"/>
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="three-text" text="0"/>
          <NumberButton bcolor="red-button" text="="/>
        </ButtonContainer>
      </div>
    );
  }
}*/


const App = () => {
  return (
    <div className="calc-wrapper">
      <CalculatorDisplay />
        <ButtonContainer className="clear-button">
          <ActionButton className="three-text" text="clear"/>
          <NumberButton bcolor="red-button" text="/"/>
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bcolor="numpad-button" text="7"/>
          <NumberButton bcolor="numpad-button" text="8"/>
          <NumberButton bcolor="numpad-button" text="9"/>
          <NumberButton bcolor="red-button" text="x"/>
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bcolor="numpad-button" text="4"/>
          <NumberButton bcolor="numpad-button" text="5"/>
          <NumberButton bcolor="numpad-button" text="6"/>
          <NumberButton bcolor="red-button" text="-"/>
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bcolor="numpad-button" text="1"/>
          <NumberButton bcolor="numpad-button" text="2"/>
          <NumberButton bcolor="numpad-button" text="3"/>
          <NumberButton bcolor="red-button" text="+"/>
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="three-text" text="0"/>
          <NumberButton bcolor="red-button" text="="/>
        </ButtonContainer>
    </div>
  );
};

export default App;
