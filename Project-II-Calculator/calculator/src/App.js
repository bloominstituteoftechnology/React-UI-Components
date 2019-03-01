import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'

const App = () => {
  return (
    <div className='calculator'>
      <Display value='0' />
      {props.buttons.oporators.map((oper, i) => {return <ActionButton value={oper} key={i}/>})}
      {props.buttons.numbers.map((num, i) => {return <NumberButton value={num} key={i}/>})}
    </div>
  );
};

let props = {
  buttons: {
    numbers: [9,8,7,6,5,4,3,2,1,0],
    oporators: ['clear','÷','x','-','+','='],
  }
}

export default App;