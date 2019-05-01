import React from 'react';
import './App.css';
import DisplayScreen from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className = 'container'>
      <DisplayScreen />
      <NumberButton />
      <ActionButton />
    </div>
  );
};

export default App;
