import React from 'react';

import ActionButton from './ButtonComponents/ActionButton';
import NumberButton from './ButtonComponents/NumberButton';
import CalculatorDisplay from './DisplayComponents/CalculatorDisplay';

const CalcContainer = () => {
  return (
    <div>
      <CalculatorDisplay text='calc display'/>

      <ActionButton text='action btn' bgColor='btn-white'/>
      <NumberButton text='number btn'/>
    </div>
  )
}

export default CalcContainer