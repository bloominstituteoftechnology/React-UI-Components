import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import ActionsDisplay from './components/DisplayComponents/ActionsDisplay';
import NumbersDisplay from './components/DisplayComponents/NumbersDisplay';
import InputDisplay from './components/DisplayComponents/InputDisplay';



const App = (props) => {
  return (
    <div className='calculator'>
      <InputDisplay />
      <div className="calc-content">
          <div className='numbers'>
            <NumbersDisplay />
          </div>

          <div className='actions'>
            <ActionsDisplay />
          </div>
        </div>
    </div>
    
  );
};

export default App;
