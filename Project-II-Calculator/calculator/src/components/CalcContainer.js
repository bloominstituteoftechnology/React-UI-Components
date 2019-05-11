import React from 'react';

import ActionButton from './ButtonComponents/ActionButton';
import NumberButton from './ButtonComponents/NumberButton';
import CalculatorDisplay from './DisplayComponents/CalculatorDisplay';

import './CalcStyles.css'

const CalcContainer = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay text='0'/>

      <div className="btn-row">
        <ActionButton text='clear'/>
        <NumberButton text='÷' bgColor='end-btn'/>
      </div>
      <div className="btn-row">
        <NumberButton text='7'/>
        <NumberButton text='8'/>
        <NumberButton text='9'/>
        <NumberButton text='X' bgColor='end-btn'/>
      </div>
      <div className="btn-row">
        <NumberButton text='4'/>
        <NumberButton text='5'/>
        <NumberButton text='6'/>
        <NumberButton text='-' bgColor='end-btn'/>
      </div>
      <div className="btn-row">
        <NumberButton text='1'/>
        <NumberButton text='2'/>
        <NumberButton text='3'/>
        <NumberButton text='+' bgColor='end-btn'/>
      </div>
      <div className="btn-row">
        <ActionButton text='0'/>
        <NumberButton text='=' bgColor='end-btn'/>
      </div>
    </div>
  )
}

export default CalcContainer