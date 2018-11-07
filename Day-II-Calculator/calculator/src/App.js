import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButtons from './components/ButtonComponents/NumberButton';
import ActionButtons from './components/ButtonComponents/ActionButton';
import LargeButtons from './components/ButtonComponents/LargeButtons';
import LargeNumbers from './components/ButtonComponents/LargerNumber';


import './App.css';


const App = () => {
  return (
    <div className="Container">
      <CalculatorDisplay text="0" />
      <div className="Row">
        <LargeButtons text="clear" />
        <ActionButtons buttonColor="red" text="÷" />
      </div>
      <div className="Row">
        <NumberButtons text="7" />
        <NumberButtons text="8" />
        <NumberButtons text="9" />
        <ActionButtons buttonColor="red" text="x" />
      </div>
      <div className="Row">
        <NumberButtons text="4" />
        <NumberButtons text="5" />
        <NumberButtons text="6" />
        <ActionButtons buttonColor="red" text="-" />
      </div>
      <div className="Row">
        <NumberButtons text="1" />
        <NumberButtons text="2" />
        <NumberButtons text="3" />
        <ActionButtons buttonColor="red"  text="+" />
      </div>
      <div className="Row">
        <LargeNumbers text="0" />
        <ActionButtons buttonColor="red" text="=" />
      </div>
    </div>
  );
};

export default App;
