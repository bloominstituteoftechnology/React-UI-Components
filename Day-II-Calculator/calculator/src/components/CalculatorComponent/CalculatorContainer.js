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
        <ActionButton buttonStyle="wide numberBtn narrow" text="clear"/>
        <NumberButton buttonStyle="numberBtn bgRed" text="/"/>
        <NumberButton buttonStyle="numberBtn" text="7"/>
        <NumberButton buttonStyle="numberBtn" text="8"/>
        <NumberButton buttonStyle="numberBtn" text="9"/>
        <NumberButton buttonStyle="numberBtn bgRed" text="*"/>
        <NumberButton buttonStyle="numberBtn" text="4"/>
        <NumberButton buttonStyle="numberBtn" text="5"/>
        <NumberButton buttonStyle="numberBtn" text="6"/>
        <NumberButton buttonStyle="numberBtn bgRed" text="-"/>
        <NumberButton buttonStyle="numberBtn" text="1"/>
        <NumberButton buttonStyle="numberBtn" text="2"/>
        <NumberButton buttonStyle="numberBtn" text="3"/>
        <NumberButton buttonStyle="numberBtn bgRed" text="+"/>
        <ActionButton buttonStyle="wide numberBtn" text="0"/>
        <NumberButton buttonStyle="numberBtn bgRed" text="="/>
      </ButtonRow>
    </div>
  )
}

export default Calculator;