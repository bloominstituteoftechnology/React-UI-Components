import React from 'react';
import './Display.css';

const CalculatorDisplay = () => {
  return (
    <input type='text' pattern='[0-9]+' maxlength='10' placeholder='0' className='calculator-display' />
  );
}

export default CalculatorDisplay;