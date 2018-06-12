import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'

const App = () => {
  return (
    <div className='container-app'>
      <CalculatorDisplay value="0"/>
      <div class="buttons">
        <ActionButton buttonStyle="wide-action"/>
        <ActionButton />

        <NumberButton />
        <NumberButton />
        <NumberButton />
        <ActionButton />

        <NumberButton />
        <NumberButton />
        <NumberButton />
        <ActionButton />

        <NumberButton />
        <NumberButton />
        <NumberButton />
        <ActionButton />

        <NumberButton buttonStyle="wide-number"/>
        <ActionButton />

      </div>
    </div>
  );
};

export default App;
