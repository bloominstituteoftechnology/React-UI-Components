import React from 'react'
import './CalculatorContainer.css';
import Display from '../DisplayComponents/CalculatorDisplay';
import ButtonRow from "../ButtonComponents/ButtonRow";
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const numbers = ["0","1",'2','3','4','5','6','7','8','9', 'clear'];
const actions = ['=','+','-','*','/'];

const Calculator = props => {
  return (
    <div className="calculator">
      <Display />
      <ButtonRow>
        <NumberButton buttonStyle="wide narrow" text="clear"/>
        <ActionButton text="/"/>
        <NumberButton text="7"/>
        <NumberButton text="8"/>
        <NumberButton text="9"/>
        <ActionButton text="*"/>
        <NumberButton text="4"/>
        <NumberButton text="5"/>
        <NumberButton text="6"/>
        <ActionButton text="-"/>
        <NumberButton text="1"/>
        <NumberButton text="2"/>
        <NumberButton text="3"/>
        <ActionButton text="+"/>
        <NumberButton buttonStyle="wide" text="0"/>
        <ActionButton text="="/>
      </ButtonRow>
    </div>
  )
}

export default Calculator;