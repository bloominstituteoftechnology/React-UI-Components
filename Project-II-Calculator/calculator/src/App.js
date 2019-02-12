import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const Numbers = {
    zero : {
      buttonStyle: 'number',
      text: '0',
    },
    one: {
      buttonStyle: 'number',
      text: '1',
    },
    two: {
      buttonStyle: 'number',
      text: '2',
    },
    three : {
      buttonStyle: 'number',
      text: '3',
    },
    four: {
      buttonStyle: 'number',
      text: '4',
    },
    five: {
      buttonStyle: 'number',
      text: '5',
    },
    six: {
      buttonStyle: 'number',
      text: '6',
    },
    seven: {
      buttonStyle: 'number',
      text: '7',
    },
    eight: {
      buttonStyle: 'number',
      text: '8',
    },
    nine: {
      buttonStyle: 'number',
      text: '9',
    },
    divde: {
      buttonStyle: 'operator',
      text: '/',
    },
    multiply: {
      buttonStyle: 'operator',
      text: 'x',
    },
    subtract: {
      buttonStyle: 'operator',
      text: '-',
    },
    add: {
      buttonStyle: 'operator',
      text: '+',
    },
    }
};

const Actions = {
  zero: {
    text: '0'
  },
  clear: {
    text:'clear'
  },


const Display = {
  style: 'calculator-display'
}

const App = () => {
  return (
    <div>
      <CalculatorDisplay props={} />
      <ActionButton props={Actions} />
      <NumberButton props={Numbers} />
    </div>
  );
};

export default App;
