import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import MathButton from './components/ButtonComponents/MathButtons';
import NumberButton from './components/ButtonComponents/NumberButton';
import './App.css';

const App = () => {
  return (
    <div>
     <CalculatorDisplay default='0' />
     <ActionButton actionText='clear' />
     <MathButton />   
     <NumberButton />
     <ActionButton actionText='0' />
    </div>
  );
};

export default App;
