import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay'
import Button from './components/ButtonComponents/Button'

const App = () => {
  return (
    <div className='calculator'>
      <Display value='0' />
      {buttons.map((btn, i) => {return <Button btn={btn} key={i}/>})}
    </div>
  );
};

let buttons = [
    { value: 'clear',
      class: 'btn oper span3'},
    { value: '÷',
      class: 'btn oper'},
    { value: 'x',
      class: 'btn oper'},
    { value: '-',
      class: 'btn oper'},
    { value: '+',
      class: 'btn oper'},
    { value: '=',
      class: 'btn oper'},
    { value: 9,
      class: 'btn num'},
    { value: 8,
      class: 'btn num'},
    { value: 7,
      class: 'btn num'},
    { value: 6,
      class: 'btn num'},
    { value: 5,
      class: 'btn num'},
    { value: 4,
      class: 'btn num'},
    { value: 3,
      class: 'btn num'},
    { value: 2,
      class: 'btn num'},
    { value: 1,
      class: 'btn num'},
    { value: 0,
      class: 'btn num span3'},
]

export default App;