import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div class = 'app'>
      <CalculatorDisplay />
      <div className = 'buttons'>
      <div className = 'number-buttons'>
        <div className = 'toprow'>
            <NumberButton name = 'clear' class = 'large'/>
          </div>
        <div className = 'row'>
            <NumberButton name = '7' class = 'small'/>
            <NumberButton name = '8' class = 'small'/>
            <NumberButton name = '9' class = 'small'/>
        </div>
        <div className = 'row'>
            <NumberButton name = '4' class = 'small'/>
            <NumberButton name = '5' class = 'small'/>
            <NumberButton name = '6' class = 'small'/>
        </div>
        <div className = 'row'>
          <NumberButton name = '1' class = 'small'/>
          <NumberButton name = '2' class = 'small'/>
          <NumberButton name = '3' class = 'small'/>
        </div>
        <div className = 'botrow'>
          <NumberButton name = '0' class = 'large'/>
        </div>
      </div>
    </div>
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
  );
};

export default App;
