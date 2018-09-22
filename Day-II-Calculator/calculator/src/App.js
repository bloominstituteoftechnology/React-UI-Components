import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ClearButton from './components/ButtonComponents/ClearButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import ZeroButton from './components/ButtonComponents/ZeroButton';
import NumberPad from './components/ButtonComponents/NumberPad';

const App = () => {

  return (
    <div className="calculatorContainer">
      <Display />
      <NumberPad />
      <ActionButton />
    </div>
  );
};

export default App;
