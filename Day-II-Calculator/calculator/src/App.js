import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton'

const numbers = [
  {
      text: '7',
      buttonStyle: 'number'
  },
  {
      text: '8',
      buttonStyle: 'number'
  },
  {
      text: '9',
      buttonStyle: 'number'
  },
  {
      text: '4',
      buttonStyle: 'number'
  },
  {
      text: '5',
      buttonStyle: 'number'
  },
  {
      text: '6',
      buttonStyle: 'number'
  },
  {
      text: '1',
      buttonStyle: 'number'
  },
  {
      text: '2',
      buttonStyle: 'number'
  },
  {
      text: '3',
      buttonStyle: 'number'
  },
];

const actions = [
  {
    text: 'Clear'
  },
  {
    text: '0'
  },
]

const functions = [
  {
    text: '÷',
    buttonStyle: 'function'
  },
  {
    text: '×',
    buttonStyle: 'function'
  },
  {
    text: '−',
    buttonStyle: 'function'
  },
  {
    text: '+',
    buttonStyle: 'function'
  },
  {
    text: '=',
    buttonStyle: 'function'
  }
]

const App = () => {
  return (
    <div>
      <Display />
      <div className="flex">

        <div className="buttonwrap">
          <ActionButton action={actions[0]}/>
          <div className='numbers'>
            {numbers.map(number => {return <NumberButton number={number}/>;})}
          </div>
          <ActionButton action={actions[1]}/>
        </div>

        <div className='functions'>
          {functions.map(fx => {return <NumberButton number={fx} />;})}
        </div>

      </div>
    </div>
  );
};

export default App;
