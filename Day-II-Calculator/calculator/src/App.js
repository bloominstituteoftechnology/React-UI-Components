import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='container'>
      <Display />
      <div className='action-buttons'>
        <ActionButton name='÷' />
        <ActionButton name='x' />
        <ActionButton name='-' />
        <ActionButton name='+' />
        <ActionButton name='=' />
      </div>
    </div>
  );
};

export default App;
