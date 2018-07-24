import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import FunctionButton from './components/ButtonComponents/FunctionButton';

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
    <div className="calc-container">
      <div className="calc-display">
        <CalculatorDisplay text="0" />
      </div>
      <div className="calc-content">
      <div className="action-row">
        <ActionButton text="clear" />
        <FunctionButton text="÷" />
      </div>
      <div className="nmbr-bttns">
        <div className="bttn-row">
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <FunctionButton text="×" />
        </div>
        <div className="bttn-row">
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <FunctionButton text="—" />
        </div>
        <div className="bttn-row">
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <FunctionButton text="+" />
        </div>
      </div>
      <div className="action-row">
        <ActionButton text="0" />
        <FunctionButton text="=" />
      </div>
      </div>
    </div>
  );
};

export default App;
