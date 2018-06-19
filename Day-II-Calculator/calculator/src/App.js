import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <CalculatorDisplay />
      <div className='calculator-left-side'>
        <ActionButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
      </div>
      <div className='calculator-right-side'>
        <ActionButton />
        <ActionButton />
        <ActionButton />
        <ActionButton />
        <ActionButton />
      </div>
    </div>
  );
};

export default App;
