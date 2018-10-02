import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const calculator = [
  {
    value: 'clear',
    style: 'ActionButton text',
    type: 'action'
  },
  {
    value: '÷',
    style: 'NumberButton red',
    type: 'number'
  },
  {
    value: 7,
    style: 'NumberButton',
    type: 'number'
  },
  {
    value: 8,
    style: 'NumberButton',
    type: 'number'
  },
  {
    value: 9,
    style: 'NumberButton',
    type: 'number'
  },
  {
    value: 'X',
    style: 'NumberButton red',
    type: 'number'
  },
  {
    value: 4,
    style: 'NumberButton',
    type: 'number'
  },
  {
    value: 5,
    style: 'NumberButton',
    type: 'number'
  },
  {
    value: 6,
    style: 'NumberButton',
    type: 'number'
  },
  {
    value: '–',
    style: 'NumberButton red',
    type: 'number'
  },
  {
    value: 1,
    style: 'NumberButton',
    type: 'number'
  },
  {
    value: 2,
    style: 'NumberButton',
    type: 'number'
  },
  {
    value: 3,
    style: 'NumberButton',
    type: 'number'
  },
  {
    value: '+',
    style: 'NumberButton red',
    type: 'number'
  },
  {
    value: 0,
    style: 'ActionButton text',
    type: 'action'
  },
  {
    value: '=',
    style: 'NumberButton red',
    type: 'number'
  }
];

const App = () => {
  return (
    <div className="App">
      <CalculatorDisplay style="CalculatorDisplay" value={0} />

      {calculator.map(button => {
        if (button.type === 'action') {
          return <ActionButton style={button.style} value={button.value} />;
        } else if (button.type === 'number') {
          return <NumberButton style={button.style} value={button.value} />;
        }
      })}
    </div>
  );
};

export default App;
