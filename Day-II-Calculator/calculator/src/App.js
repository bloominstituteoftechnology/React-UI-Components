import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      <NumberButton buttonStyle="button--number button--0" text="0"  />
      <NumberButton buttonStyle="button--number button--1" text="1"  />
      <NumberButton buttonStyle="button--number button--2" text="2"  />
      <NumberButton buttonStyle="button--number button--3" text="3"  />
      <NumberButton buttonStyle="button--number button--4" text="4"  />
      <NumberButton buttonStyle="button--number button--5" text="5"  />
      <NumberButton buttonStyle="button--number button--6" text="6"  />
      <NumberButton buttonStyle="button--number button--7" text="7"  />
      <NumberButton buttonStyle="button--number button--8" text="8"  />
      <NumberButton buttonStyle="button--number button--9" text="9"  />
      <ActionButton buttonStyle="button--clear" text="clear"  />
      <ActionButton buttonStyle="button--operator button--divide" text={'\u00f7'}  />
      <ActionButton buttonStyle="button--operator button--multiply" text={'\u00d7'}  />
      <ActionButton buttonStyle="button--operator button--minus" text={'\u2212'}  />
      <ActionButton buttonStyle="button--operator button--plus" text={'\u002b'}  />
      <ActionButton buttonStyle="button--operator button--equals" text={'\u003d'}  />
    </div>
  );
};

export default App;
