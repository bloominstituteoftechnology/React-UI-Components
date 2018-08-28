import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    // <div>
    //   <h3>Welcome to React Calculator</h3>
    //   <p>
    //     We have given you a starter project. You'll want to build out your
    //     components in their respective files, remove this code and replace it
    //     with the proper components.
    //   </p>
    //   <p>
    //     <strong>
    //       Don't forget to `default export` your components and import them here
    //       inside of this file in order to make them work.
    //     </strong>
    //   </p>
    // </div>

    <div className="calculator-wrapper">
      <CalculatorDisplay text="0" />
      <div className="buttons">
        <ActionButton text="Clear" />
        <NumberButton text="÷" type="symbol" />
        <NumberButton text="7" type="number" />
        <NumberButton text="8" type="number" />
        <NumberButton text="9" type="number" />
        <NumberButton text="x" type="symbol" />
        <NumberButton text="4" type="number" />
        <NumberButton text="5" type="number" />
        <NumberButton text="6" type="number" />
        <NumberButton text="-" type="symbol" />
        <NumberButton text="1" type="number" />
        <NumberButton text="2" type="number" />
        <NumberButton text="3" type="number" />
        <NumberButton text="+" type="symbol" />
        <ActionButton text="0" />
        <NumberButton text="=" type="symbol" />
      </div>
    </div>
  );
};

export default App;
