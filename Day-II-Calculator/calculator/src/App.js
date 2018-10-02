import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      
      <div>
        <CalculatorDisplay displayStyle={'display'} text={'0'} />
      </div>

      <div>
        <ActionButton buttonStyle={'action'} text={'clear'} />
        <NumberButton buttonStyle={'operators'} text={'\u00f7'} />
      </div>

      <div>
        <NumberButton buttonStyle={'number'} text={'7'} />
        <NumberButton buttonStyle={'number'} text={'8'} />
        <NumberButton buttonStyle={'number'} text={'9'} />
        <NumberButton buttonStyle={'operators'} text={'x'} />
      </div>

      <div>
        <NumberButton buttonStyle={'number'} text={'4'} />
        <NumberButton buttonStyle={'number'} text={'5'} />
        <NumberButton buttonStyle={'number'} text={'6'} />
        <NumberButton buttonStyle={'operators'} text={'-'} />
      </div>

      <div>
        <NumberButton buttonStyle={'number'} text={'1'} />
        <NumberButton buttonStyle={'number'} text={'2'} />
        <NumberButton buttonStyle={'number'} text={'3'} />
        <NumberButton buttonStyle={'operators'} text={'+'} />
      </div>

      <div>
        <NumberButton buttonStyle={'action'} text={'0'} />
        <NumberButton buttonStyle={'operators'} text={'='} />
      </div>

    </div>
  );
};

export default App;
