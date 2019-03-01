import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'

const App = () => {
  return (
    <div className='calculator'>
      <Display value='0' />
      {props.buttons.oporators.map((oper, i) => {return <ActionButton oper={oper} key={i}/>})}
      {props.buttons.numbers.map((num, i) => {return <NumberButton num={num} key={i}/>})}
    </div>
  );
};

let props = {
  buttons: {
    numbers: [
      { value: 9,
        span: 1},
      { value: 8,
        span: 1},
      { value: 7,
        span: 1},
      { value: 6,
        span: 1},
      { value: 5,
        span: 1},
      { value: 4,
        span: 1},
      { value: 3,
        span: 1},
      { value: 2,
        span: 1},
      { value: 1,
        span: 1},
      { value: 0,
        span: 3},
    ],
    oporators: [
      { value: 'clear',
        span: 3,},
      { value: '÷',
        span: 1,},
      { value: 'x',
        span: 1,},
      { value: '-',
        span: 1,},
      { value: '+',
        span: 1,},
      { value: '=',
        span: 1,},
    ],
    // oporators: ['clear','÷','x','-','+','='],
  }
}

export default App;