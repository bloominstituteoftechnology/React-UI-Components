import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import LongButton from './components/ButtonComponents/LongButton';

const App = () => {
  return (
    <div className="cont">
    <CalculatorDisplay />
      <LongButton text="clear" />
      <ActionButton text="&#247;" />
      <NumberButton text="7" />
      <NumberButton text="8"/>
      <NumberButton text="9"/>
      <ActionButton text="&#215;"/>
      <NumberButton text="4"/>
      <NumberButton text="5"/>
      <NumberButton text="6"/>
      <ActionButton text="-"/>
      <NumberButton text="1"/>
      <NumberButton text="2"/>
      <NumberButton text="3"/>
      <ActionButton text="+"/>
      <LongButton text="0" />
      <ActionButton text="=" />

    </div>
  );
};

export default App;
