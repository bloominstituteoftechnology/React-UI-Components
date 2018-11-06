import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';

const App = () => {
  return (
    <div className={'calculator-container'}>

      <CalculatorDisplay className={'display'} data={0}/>
      
      <div className={'button-components'}>
        {[0,7,8,9,4,5,6,1,2,3,'clear'].map( (num) => <NumberButton className={'number-key'} number={num} /> )}
      </div>

      <div className={'action-components'}>
        {['+', '*', '/', '-', '='].map( (action) => <ActionButton className={'action-button'} action={action} /> )}
      </div>
      
    </div>
  );
};

export default App;
