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
      <CalculatorDisplay text="0" />
      <ActionButton text="0" />
      <div className="third-row">
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <NumberButton text="-" buttonStyle="red" />
      </div>
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <NumberButton text="+" />
      <ActionButton text="clear" />
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
