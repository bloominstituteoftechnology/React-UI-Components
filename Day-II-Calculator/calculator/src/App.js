import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ClearButton from './components/ButtonComponents/ClearButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import ZeroButton from './components/ButtonComponents/ZeroButton';

const App = () => {
  const numbers = {
    numArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  };

  const actions = {
    actionArray: ['divide', 'X', '-', '+', '=']
  };

  return (
    <div className="CalculatorContainer">
      <Display />
      <ClearButton />
      <ActionButton />
      <NumberButton number={numbers} />
      <ZeroButton />
    </div>
  );
};

export default App;
