import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />

      <ActionButton buttonStyle="clear-btn" text="clear" />
      
      <ActionButton buttonStyle="operator-btn" text="÷" />
      
      <NumberButton buttonStyle="number-btn" text="7" />
      <NumberButton buttonStyle="number-btn" text="8" />
      <NumberButton buttonStyle="number-btn" text="9" />

      <ActionButton buttonStyle="operator-btn" text="x" />

      <NumberButton buttonStyle="number-btn" text="4" />
      <NumberButton buttonStyle="number-btn" text="5" />
      <NumberButton buttonStyle="number-btn" text="6" />

      <ActionButton buttonStyle="operator-btn" text="-" />

      <NumberButton buttonStyle="number-btn" text="1" />
      <NumberButton buttonStyle="number-btn" text="2" />
      <NumberButton buttonStyle="number-btn" text="3" />

      <ActionButton buttonStyle="operator-btn" text="+" />

      <ActionButton buttonStyle="zero-btn" text="0" />
      
      <ActionButton buttonStyle="operator-btn" text="=" />
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
    </div>
  );
};

export default App;
