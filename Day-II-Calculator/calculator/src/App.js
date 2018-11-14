import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

class App extends React.Component {
  render() {    
    return (
      <div className='app'>
        <CalculatorDisplay />
        <ButtonContainer className="clear-button">
          <ActionButton className="three-text" text="clear" />
          <NumberButton buttonStyle="red-button" text="/" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton buttonStyle="num-button" text="7" />
          <NumberButton buttonStyle="num-button" text="8" />
          <NumberButton buttonStyle="num-button" text="9" />
          <NumberButton buttonStyle="red-button" text="X" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton buttonStyle="num-button" text="4" />
          <NumberButton buttonStyle="num-button" text="5" />
          <NumberButton buttonStyle="num-button" text="6" />
          <NumberButton buttonStyle="red-button" text="-" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton buttonStyle="num-button" text="1" />
          <NumberButton buttonStyle="num-button" text="2" />
          <NumberButton buttonStyle="num-button" text="3" />
          <NumberButton buttonStyle="red-button" text="+" />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="three-text" text="0" />
          <NumberButton buttonStyle="red-button" text="=" />
        </ButtonContainer>          
      </div>
    );
  }
}

export default App;
