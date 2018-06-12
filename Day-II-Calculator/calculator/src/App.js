import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import SymbolButton from './components/ButtonComponents/SymbolButton';

const App = () => {
  return (
    <div className='container'>
      <Display />
      <div className='buttons-container'>
      <div className='number-buttons'>
      <ActionButton name='0' customStyleProp='long-button' />
      <NumberButton name='1' />
      <NumberButton name='2' />
      <NumberButton name='3' />
      <NumberButton name='4' />
      <NumberButton name='5' />
      <NumberButton name='6' />
      <NumberButton name='7' />
      <NumberButton name='8' />
      <NumberButton name='9' />
      <ActionButton name='clear' customStyleProp='clear-button'  />
      </div>
      <div className='symbol-buttons'>
        <SymbolButton name='÷' />
        <SymbolButton name='x' />
        <SymbolButton name='-' />
        <SymbolButton name='+' />
        <SymbolButton name='=' />
      </div>
      </div>
    </div>
  );
};

export default App;
