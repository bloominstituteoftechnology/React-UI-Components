import React from 'react';
import './App.css';
import NumberPad from './components/ButtonComponents/NumberPad';
import Display from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='calculator'>
      <Display />
      <NumberPad />
    </div>
  );
};

export default App;
