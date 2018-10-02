import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className='calc-container'>
        <CalculatorDisplay />
        <div className='number-action-container'>
          <div className='row'>
              <ActionButton buttonStyle='button clear-btn' text='clear' />
              <NumberButton buttonStyle='button maroon' text='&divide;' />
          </div>
        </div>
    </div>
  );
};

export default App;
