import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='app-container'>
      <CalculatorDisplay />
      <div className='calculator-left-side'>
        <ActionButton buttonFunction='Clear'/>
        {/* <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton /> */}
        <ActionButton buttonFunction='0'/>
      </div>
      <div className='calculator-right-side'>
        <ActionButton buttonFunction='&divide;'/>
        <ActionButton buttonFunction='&times;'/>
        <ActionButton buttonFunction='&minus;'/>
        <ActionButton buttonFunction='+'/>
        <ActionButton buttonFunction='='/>
      </div>
    </div>
  );
};

export default App;
