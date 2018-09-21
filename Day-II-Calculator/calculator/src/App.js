import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
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
      </p>

      <div id="calc">
        <div className="row">
          <CalculatorDisplay />
        </div>

        <div className="row">
          <ActionButton action="Clear" />
          <NumberButton number="÷" buttonStyle="symbol" />
        </div>

        <div className="row">
          <NumberButton number="1" buttonStyle="number" />
          <NumberButton number="2" buttonStyle="number" />
          <NumberButton number="3" buttonStyle="number" />
          <NumberButton number="" buttonStyle="symbol" />
        </div>

        <div className="row">
          <NumberButton number="4" buttonStyle="number" />
          <NumberButton number="5" buttonStyle="number" />
          <NumberButton number="6" buttonStyle="number" />
          <NumberButton number="–" buttonStyle="symbol" />
        </div>

        <div className="row">
          <NumberButton number="7" buttonStyle="number" />
          <NumberButton number="8" buttonStyle="number" />
          <NumberButton number="9" buttonStyle="number" />
          <NumberButton number="+" buttonStyle="symbol" />
        </div>

        <div className="row">
          <ActionButton action="0" />
          <NumberButton number="" buttonStyle="symbol" />
        </div>
      </div>
    </div>
  );
};

export default App;
