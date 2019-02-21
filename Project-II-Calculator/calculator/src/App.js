import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className="calculator-app">
      <CalculatorDisplay />
      <ButtonContainer className="clear-btn">
        <ActionButton className="action-btn" text="clear"/>
        <NumberButton number="red-btn" text="÷" />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton number="num-btn" text="7" />
        <NumberButton number="num-btn" text="8" />
        <NumberButton number="num-btn" text="9" />
        <NumberButton number="red-btn" text="x" />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton number="num-btn" text="4" />
        <NumberButton number="num-btn" text="5" />
        <NumberButton number="num-btn" text="6" />
        <NumberButton number="red-btn" text="-" />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton number="num-btn" text="1" />
        <NumberButton number="num-btn" text="2" />
        <NumberButton number="num-btn" text="3" />
        <NumberButton number="red-btn" text="+" />
      </ButtonContainer>
      <ButtonContainer>
        <ActionButton className="zero" text="0" />
        <NumberButton number="red-btn" text="=" />
      </ButtonContainer> 
    </div>
  );
};

export default App;


// {/* <h3>Welcome to React Calculator</h3>
//       <p>
//         We have given you a starter project. You'll want to build out your
//         components in their respective files, remove this code and replace it
//         with the proper components.
//       </p>
//       <p>
//         <strong>
//           Don't forget to `default export` your components and import them here
//           inside of this file in order to make them work.
//         </strong>
//       </p> */}