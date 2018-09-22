import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const numberButton = {
  button1: 1,
  button2: 2,
  button3: 3,
  button4: 4,
  button5: 5,
  button6: 6,
  button7: 7,
  button8: 8,
  button9: 9
};

const actionButton = {
  clearButton: 'clear',
  zeroButton: 0
};

const operatorButton = {
  divide: '÷',
  multiply: 'x',
  subtract: '-',
  add: '+',
  equals: '='
};

ReactDOM.render(<App />, document.getElementById('root'));
