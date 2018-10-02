import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='container'>
      <CalculatorDisplay />
      <ActionButton buttonText='Clear'/>
      {numberBtn.map(number => {
        return (
          <NumberButton number={numberBtn} />
        );
      })}
      
  </div>
  );
};

export default App;
