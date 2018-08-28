import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

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
      <div class='numbers'>
        <div class='numbers 9to1'>
          <NumberButton number='9' />
          <NumberButton number='8' />
          <NumberButton number='7' />
          <NumberButton number='6' />
          <NumberButton number='5' />
          <NumberButton number='4' />
          <NumberButton number='3' />
          <NumberButton number='2' />
          <NumberButton number='1' />
        </div>
        <div class='numbers 0'>
          <NumberButton number='0' />
        </div>
      </div>
      <div class='actions'>
        <ActionButton action='/' />
        <ActionButton action='*' />
        <ActionButton action='-' />
        <ActionButton action='+' />
        <ActionButton action='=' />
      </div>
    </div>
  );
};

export default App;
