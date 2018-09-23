import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
  <div className="appContainer">
    
    <CalculatorDisplay />


<div class="FlexBoxForFunctionAndNumbers">
  <div className="FunctionButtons">
      <ActionButton type="function" text='÷' />
      <ActionButton type="function" text="x" />
      <ActionButton type="function" text="+" />
      <ActionButton type="function" text="-" />
      <ActionButton type="function" text="=" />
  </div>

  <div class="numbers">
    <div className="ZeroClear">
      <ActionButton type="clear" text='Clear' />
    </div>

    <div className="NumberButtonTop">
      <NumberButton type="number" text="7" />
      <NumberButton type="number" text="8" />
      <NumberButton type="number" text="9" />
    </div>

    <div className="NumberButtonMiddle">
      <NumberButton type="number" text="4" />
      <NumberButton type="number" text="5" />
      <NumberButton type="number" text="6" />
    </div>


    <div className="NumberButtonBottom">
      <NumberButton type="number" text="1" />
      <NumberButton type="number" text="2" />
      <NumberButton type="number" text="3" />
    </div>

    <div className="ZeroClear">
      <ActionButton type="clear" text="0" />
    </div>
    </div>
  </div>

  </div>
  );
};

export default App;