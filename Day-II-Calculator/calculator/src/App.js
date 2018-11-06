import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
// import NumberButton from './components/ButtonComponents/NumberButton';
// import ActionButton from './components/ButtonComponents/ActionButton';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';


const App = () => {
  return (
    <div className="calculator-wrapper">

      <CalculatorDisplay />

      <ButtonContainer />

    </div>
  );
};

export default App;

{/* <div className="calculator-buttons-area">

<div className="numbers-clear-buttons-area">

  <ActionButton buttonStyle="clear" text="clear" />

  <div className="number-buttons-area">
    <NumberButton buttonStyle="number-button" text="7" />
    <NumberButton buttonStyle="number-button" text="8" />
    <NumberButton buttonStyle="number-button" text="8" />
    <NumberButton buttonStyle="number-button" text="4" />
    <NumberButton buttonStyle="number-button" text="5" />
    <NumberButton buttonStyle="number-button" text="6" />
    <NumberButton buttonStyle="number-button" text="1" />
    <NumberButton buttonStyle="number-button" text="2" />
    <NumberButton buttonStyle="number-button" text="3" />
  </div>

  <ActionButton buttonStyle="zero" text="0" />

</div>

<div className="operator-buttons">
  <NumberButton buttonStyle="operator-button" text="÷" />
  <NumberButton buttonStyle="operator-button" text="×" />
  <NumberButton buttonStyle="operator-button" text="-" />
  <NumberButton buttonStyle="operator-button" text="+" />
  <NumberButton buttonStyle="operator-button" text="=" />
</div>

</div> */}