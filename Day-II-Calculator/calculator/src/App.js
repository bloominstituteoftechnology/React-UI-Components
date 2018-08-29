import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

class App extends React.Component {
  render() {
return(
    <div className="calculator-wrapper">
      <CalculatorDisplay />
      <ButtonContainer className="clear-button">
        <ActionButton className="three-text" text="clear" />
        <NumberButton bgColor="red-button" text="/" />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton bgColor="num-button" text="7" />
        <NumberButton bgColor="num-button" text="8" />
        <NumberButton bgColor="num-button" text="9" />
        <NumberButton bgColor="red-button" text="X" />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton bgColor="num-button" text="4" />
        <NumberButton bgColor="num-button" text="5" />
        <NumberButton bgColor="num-button" text="6" />
        <NumberButton bgColor="red-button" text="-" />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton bgColor="num-button" text="1" />
        <NumberButton bgColor="num-button" text="2" />
        <NumberButton bgColor="num-button" text="3" />
        <NumberButton bgColor="red-button" text="+" />
      </ButtonContainer>
      <ButtonContainer>
        <ActionButton className="three-text" text="0" />
        <NumberButton bgColor="red-button" text="=" />
      </ButtonContainer>
    </div>
    );
  };
};
 
    /*return (
      <div className="container">
        
         
          <CalculatorDisplay />
      
        
         <ActionButton text="clear" buttonStyle="threeQtr" />
          <NumberButton buttonStyle="fas fa-divide" />
       
        <div>
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <NumberButton buttonStyle="fas fa-times" />
        </div>
        <div>
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <NumberButton buttonStyle="fas fa-minus" />
        </div>
        <div>
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <NumberButton buttonStyle="fas fa-plus" />
        </div>
        <div>
          <ActionButton text="0" buttonStyle="threeQtr" />
          <NumberButton buttonStyle="fas fa-equals" />
        </div>
      </div>
    );
  }*/


export default App;
