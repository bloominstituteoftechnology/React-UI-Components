import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import numberArray from './data/numberArray';
import CalculationButtons from './components/ButtonComponents/CalculationButtons';
import calcArray from './data/calcArray';

const App = () => {
  return (
    <div className='container'>
      <CalculatorDisplay />
      <ActionButton buttonText='Clear'/>
      <div className='buttons'>
      <div className='buttonPadLeft'>
      {numberArray.map(number => {
        return (
          <NumberButton number={number} />
        );
      })}
      </div>
      <div className='buttonPadRight'>
        {calcArray.map(icon => {
          return (
            <CalculationButtons icon={icon} />
          );
        })}
      </div>
      </div>
      <ActionButton buttonText='0'/>

      
  </div>
  );
};

export default App;
