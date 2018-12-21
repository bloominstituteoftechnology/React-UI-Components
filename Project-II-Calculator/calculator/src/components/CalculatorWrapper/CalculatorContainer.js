import React from 'react';
import './Calculator.css';
import ButtonRow from '../ButtonComponents/ButtonRow';

const CalculatorContainer = _ => {
  return (
    <div className='calc-cont'>
      <ButtonRow range={[7,8,9]} className='num-row' />
      <ButtonRow range={[4,5,6]} className='num-row middle-row' />
      <ButtonRow range={[1,2,3]} className='num-row' />
    </div>
  )
}

export default CalculatorContainer;