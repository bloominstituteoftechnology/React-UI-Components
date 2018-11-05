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

      {/* Calculator */}
      <div class='display'>
        <CalculatorDisplay />
      </div>
      <div class='lower-section'>
        <div class='left'>
          <div class='actions clear'>
              <ActionButton action='clear' />
          </div>
          <div class='numbers 9to1'>
            <div class='row one'>
              <NumberButton number='7' />
              <NumberButton number='8' />
              <NumberButton number='9' />
            </div>
            <div class='row two'>
              <NumberButton number='4' />
              <NumberButton number='5' />
              <NumberButton number='6' />
            </div>
            <div class='row three'>
              <NumberButton number='1' />
              <NumberButton number='2' />
              <NumberButton number='3' />
            </div>
          </div>
          <div class='numbers 0'>
            <NumberButton number='0' />
          </div>
        </div>
        <div class='right'>
          <ActionButton action='/' />
          <ActionButton action='*' />
          <ActionButton action='-' />
          <ActionButton action='+' />
          <ActionButton action='=' />
        </div>
      </div>
    </div>
  );
};

export default App;
