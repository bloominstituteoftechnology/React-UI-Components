import React from 'react';
import './Calculator.css';
import LeftCalcContainer from '../LeftCalc/LeftCalcContainer';
import RightCalcContainer from '../RightCalc/RightCalcContainer';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';

const CalculatorContainer = _ => {
  return (
    <div className='calc-cont'>
      <CalculatorDisplay dispVal='0'/>
      <div className="calc-flex-cont">
        <LeftCalcContainer />
        <RightCalcContainer />
      </div>
    </div>
  )
}

export default CalculatorContainer;