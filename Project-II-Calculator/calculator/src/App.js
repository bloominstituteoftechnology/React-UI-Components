import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import Display from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      <Display />
      <ActionButton />
      <NumberButton />
    </div>
  );
};

export default App;
