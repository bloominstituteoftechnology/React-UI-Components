import React from 'react';
import CalculatorDisplay from './components/DisplayComponents'
import { NumberButton, ActionButton, LargeButton } from './components/ButtonComponents'
import "./App.css"

const App = () => {

  return (
    <div className="calculator">
      <CalculatorDisplay className="display" val={0} />
      <LargeButton className="clear" text="clear" />
      <ActionButton sym="/" />
      <NumberButton num={1} />
      <NumberButton num={2} />
      <NumberButton num={3} />
      <ActionButton sym="X" />
      <NumberButton num={4} />
      <NumberButton num={5} />
      <NumberButton num={6} />
      <ActionButton sym="-" />
      <NumberButton num={7} />
      <NumberButton num={8} />
      <NumberButton num={9} />
      <ActionButton sym="+" />
      <LargeButton id="zero" text="0" />
      <ActionButton sym="=" />
    </div>
  );
};
export default App;
