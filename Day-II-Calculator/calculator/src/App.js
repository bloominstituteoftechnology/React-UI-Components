import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberPad from './components/ButtonComponents/NumberPad';

const App = () => {
  const numbers = {
    numArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  };

  const actions = {
    actionArray: ['÷', 'x', '-', '+', '=']
  };

  return (
    <div className="calculatorContainer">
      <Display text="0" displayStyle="display" />
      <NumberPad text={numbers} displayStyle="numberPad" />
      <ActionButton text={actions} displayStyle="actions" />
    </div>
  );
};

export default App;
