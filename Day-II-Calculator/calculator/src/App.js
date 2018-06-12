import React from 'react';
import './App.css';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calc-container">
      {/* <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p> */}

      <CalcDisplay />
      <ActionButton name="clear" />
      <ActionButton defaultStyle="operator-action-btn" name="/" />
      <NumberButton name="7" />
      <NumberButton name="8" />
      <NumberButton name="9" />
      <ActionButton defaultStyle="operator-action-btn" name="*" />
      <NumberButton name="4" />
      <NumberButton name="5" />
      <NumberButton name="6" />
      <ActionButton defaultStyle="operator-action-btn" name="-" />
      <NumberButton name="1" />
      <NumberButton name="2" />
      <NumberButton name="3" />
      <ActionButton defaultStyle="operator-action-btn" name="+" />
      <NumberButton defaultStyle="action-btn" name="0" />
      <ActionButton defaultStyle="operator-action-btn" name="=" />
    </div>
  );
};

export default App;
