import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='container'>
      <div>
        <CalculatorDisplay />
      </div>
      <div className='keypad'>
        <div className='keypad-left'>
          <NumberButton />
        </div>
        <div className='keypad-right'>
          <ActionButton />
        </div>
      </div>
    </div>
  );
};

export default App;
