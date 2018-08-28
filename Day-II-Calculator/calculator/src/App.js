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
        <ActionButton text="clear" style="clear" />
        <NumberButton text="÷" style="symbol" />
        <NumberButton text="7" style="number" />
        <NumberButton text="8" style="number" />
        <NumberButton text="9" style="number" />
        <NumberButton text="x" style="symbol" />
        <NumberButton text="4" style="number" />
        <NumberButton text="5" style="number" />
        <NumberButton text="6" style="number" />
        <NumberButton text="-" style="symbol" />
        <NumberButton text="1" style="number" />
        <NumberButton text="2" style="number" />
        <NumberButton text="3" style="number" />
        <NumberButton text="+" style="symbol" />
        <ActionButton text="0" style="zero" />
        <NumberButton text="=" style="symbol" />
      </div>
    </div>
  );
};

export default App;
