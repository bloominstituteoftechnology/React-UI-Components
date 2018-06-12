import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CaculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="app">

      <div className="display">
      <CalculatorDisplay />
      </div>

      <div className="row-one">
        <NumberButton />
        <NumberButton />
        <NumberButton />
      </div>
    <div className="row-two">
      <NumberButton />
      <NumberButton />
      <NumberButton />
    </div>
    <div className="row-three">
    <NumberButton />
    <NumberButton />
    <NumberButton />
    </div>





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
      </div>
    </div>
  );
};

export default App;
