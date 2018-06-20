import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

import NumberButton from './components/ButtonComponents/NumberButton';

import LargeButton from './components/ButtonComponents/LargeButton';

import ActionGroup from './components/DisplayComponents/ActionGroup';


const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay name="0" />
      <LargeButton name="clear" />
       <ActionGroup />
      <div className="nums">
      <NumberButton name="7" />
      <NumberButton name="8" />
      <NumberButton name="9" />
      <NumberButton name="4" />
      <NumberButton name="5" />
      <NumberButton name="6" />
      <NumberButton name="1" />
      <NumberButton name="2" />
      <NumberButton name="3" />
      <LargeButton name="0" />
      </div>







    </div>
  );
};

export default App;
