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
        <ActionButton text="clear" buttonStyle="wide-action"/>
        <ActionButton text="&#247;"/>

        <NumberButton text="7"/>
        <NumberButton text="8"/>
        <NumberButton text="9"/>
        <ActionButton text="&#215;"/>

        <NumberButton text="4"/>
        <NumberButton text="5"/>
        <NumberButton text="6"/>
        <ActionButton text="&#8722;"/>

        <NumberButton text="1"/>
        <NumberButton text="2"/>
        <NumberButton text="3"/>
        <ActionButton text="&#43;"/>

        <NumberButton text="0" buttonStyle="wide-number"/>
        <ActionButton text="&#61;"/>

      </div>
    </div>
  );
};

export default App;
