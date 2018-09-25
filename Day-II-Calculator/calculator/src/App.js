import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
const App = () => {
  return (
    <div className='main'>
    <div className='wrap'>
<NumberButton num={'results'} className='display' />
    <div>
    <div className='rowTwo'>

    <NumberButton num={'clear'} className='long' />
    <ActionButton sym={'÷'} className='operate divide' />

    </div>

      <div className='rowThree'>
    <NumberButton num={7} className='number seven' />
    <NumberButton num={8} className='number eight' />
    <NumberButton num={9} className='number nine' />
    <ActionButton sym={'×'} className='operate multiply' />
      </div>
      <div className='rowTwo'>
    <NumberButton num={4} className='number four' />
    <NumberButton num={5} className='number five' />
    <NumberButton num={6} className='number six' />
    <ActionButton sym={'+'} className='operate add' />

      </div>
      <div className='rowOne'>
    <NumberButton num={1} className='number one' />
    <NumberButton num={2} className='number two' />
    <NumberButton num={3} className='number three' />
    <ActionButton sym={'-'} className='operate add' />
      </div>
      <div className='rowOne'>
    <NumberButton num={0} className='long' />
    <ActionButton sym={'='} className='operate equals' />
    </div>
    </div>
    </div>
    </div>
  );
};

export default App;


