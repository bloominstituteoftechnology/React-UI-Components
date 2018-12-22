import React from 'react';
import './Calculator.css';
import LeftCalcContainer from '../LeftCalc/LeftCalcContainer';

const CalculatorContainer = _ => {
  return (
    <div className='calc-cont'>
      <LeftCalcContainer />
    </div>
  )
}

export default CalculatorContainer;