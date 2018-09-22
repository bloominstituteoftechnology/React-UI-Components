import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ClearButton from './components/ButtonComponents/ClearButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import ZeroButton from './components/ButtonComponents/ZeroButton';

const App = () => {
  return (
    <div className="CalculatorContainer">
      <Display />
      <ClearButton />
      <ActionButton />
      <NumberButton />
      <ZeroButton />
    </div>
  );
};

export default App;
