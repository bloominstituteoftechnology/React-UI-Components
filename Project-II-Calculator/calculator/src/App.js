import React from 'react';
import './App.css';
import './components/DisplayComponents/CalculatorDisplay';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='container'>
      <div className='top'>
        <CalculatorDisplay />
      </div>
      <div className='bottom'>
          <ActionButton btnClassName="btn big" content='clear' />
          <NumberButton btnClassName="btn red" content='÷' />
          <NumberButton btnClassName="btn" content='7' />
          <NumberButton btnClassName="btn" content='8' />
          <NumberButton btnClassName="btn" content='9' />
          <NumberButton btnClassName="btn red" content='×' />
          <NumberButton btnClassName="btn" content='4' />
          <NumberButton btnClassName="btn" content='5' />
          <NumberButton btnClassName="btn" content='6' />
          <NumberButton btnClassName="btn red" content='−' />
          <NumberButton btnClassName="btn" content='1' />
          <NumberButton btnClassName="btn" content='2' />
          <NumberButton btnClassName="btn" content='3' />
          <NumberButton btnClassName="btn red" content='+' />
          <ActionButton btnClassName="btn big" content='0' />
          <NumberButton btnClassName="btn red" content='=' />
      
      </div>
    </div>
  );
};

export default App;
