import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import Display from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div class='calculator'>
      <div>
        <Display />
      </div>
      <div class='clear'>
        <ActionButton buttonStyle={'action'} text={'clear'} />
        <NumberButton buttonStyle={'function'} text={'÷'} />
      </div>
      <div class='7-x'>
        <NumberButton buttonStyle={'number'} text={'7'} />
        <NumberButton buttonStyle={'number'} text={'8'} />
        <NumberButton buttonStyle={'number'} text={'9'} />
        <NumberButton buttonStyle={'function'} text={'x'} />
      </div>
      <div class='4--'>
        <NumberButton buttonStyle={'number'} text={'4'} />
        <NumberButton buttonStyle={'number'} text={'5'} />
        <NumberButton buttonStyle={'number'} text={'6'} />
        <NumberButton buttonStyle={'function'} text={'-'} />
      </div>
      <div class='1-+'>
        <NumberButton buttonStyle={'number'} text={'1'} />
        <NumberButton buttonStyle={'number'} text={'2'} />
        <NumberButton buttonStyle={'number'} text={'3'} />
        <NumberButton buttonStyle={'function'} text={'+'} />
      </div>
      <div class='zero'>
        <ActionButton buttonStyle={'action'} text={'0'} />
        <NumberButton buttonStyle={'function'} text={'='} />
      </div>
    </div>
  );
};

export default App;
