import React from 'react'
import './App.css'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='container'>
      <CalculatorDisplay />
      <NumberButton />
    </div>
  );
};

export default App;