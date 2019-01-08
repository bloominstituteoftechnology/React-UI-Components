import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const ClearButton = {
  buttonStyle: 'ActionButton',
  text: 'clear'
};

const ZeroButton = {
  buttonStyle: 'ActionButton',
  text: '0'
};

const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <ActionButton ClearButton/>
    </div>
  );
};

export default App;
