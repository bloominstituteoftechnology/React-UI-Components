import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  // let number

  return (
    <div className='app'>
     {/* <NumberButton  text='9' /> */}
     <CalculatorDisplay />
    </div>
  );
};

export default App;
