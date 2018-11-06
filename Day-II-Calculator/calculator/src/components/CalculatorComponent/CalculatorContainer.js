import React from 'react'
import './CalculatorContainer.css';
import Display from '../DisplayComponents/CalculatorDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const numbers = ["0","1",'2','3','4','5','6','7','8','9', 'clear'];
const actions = ['=','+','-','*','/'];

const Calculator = props => {
  return (
    <div className="calculator">
      <Display />
      <NumberButton className="numberSmall" text="0"/>
      <NumberButton />
      <ActionButton />
    </div>
  )
}

export default Calculator;