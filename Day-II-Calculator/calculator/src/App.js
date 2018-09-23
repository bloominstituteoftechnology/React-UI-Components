import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
// import ButtonContainer from './components/ButtonComponents/ButtonContainer.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay padding="padding-right"/>
      <div className='button-container'>
         <ActionButton customStyle="clear" text="clear" />
         <NumberButton color="red divide" text="&divide;" />
      </div>
      <div className='button-container'>
         <NumberButton color="white" text="7" />
         <NumberButton color="white" text="8" />
         <NumberButton color="white" text="9" />
         <NumberButton color="red" text="&times;" />
      </div>
      <div className='button-container'>
         <NumberButton color="white" text="4" />
         <NumberButton color="white" text="5" />
         <NumberButton color="white" text="6" />
         <NumberButton color="red minus" text="&minus;" />
      </div>
      <div className='button-container'>
         <NumberButton color="white" text="1" />
         <NumberButton color="white" text="2" />
         <NumberButton color="white" text="3" />
         <NumberButton color="red" text="&#43;" />
      </div>
      <div className='button-container'>
         <ActionButton customStyle="zero" text="0" />
         <NumberButton color="red" text="&#61;" />
      </div>
    </div>
  );
};

export default App;
