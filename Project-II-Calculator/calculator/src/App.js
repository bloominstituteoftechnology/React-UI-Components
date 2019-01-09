import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="appContainer">
      <CalculatorDisplay />
      <ActionButton />
      <NumberButton className="seven" number={7} />
      <NumberButton className="four" number={4} />
      <NumberButton className="one" number={1} />
      <NumberButton className="eight" number={8} />
      <NumberButton className="five" number={5} />
      <NumberButton className="two" number={2} />
      <NumberButton className="nine" number={9} />
      <NumberButton className="six" number={6} />
      <NumberButton className="three" number={3} />
      <NumberButton className="divide" text="÷" />
      <NumberButton className="multiply" text="x" />
      <NumberButton className="minus" text="-" />
      <NumberButton className="add" text="+" />
      <NumberButton className="equal" text="=" />
      <ActionButton className="zero" number={0}/>
    </div>
  );
};

export default App;
