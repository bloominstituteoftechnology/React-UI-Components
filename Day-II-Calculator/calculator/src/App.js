import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import CalculatorKeypad from './components/ButtonComponents/CalculatorKeypad';

const App = () => {
  return (
    <div className='CalculatorContainer'>
      <CalculatorDisplay displayStyle={'display'} text={'0'}/>
      <CalculatorKeypad/>
    </div>
  );
};

export default App;
