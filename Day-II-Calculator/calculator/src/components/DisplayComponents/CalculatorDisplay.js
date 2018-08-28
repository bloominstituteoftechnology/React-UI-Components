import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
  return (
    <input type='text' pattern='[0-9]+' maxlength='10' value={props.total} className='calculator-display' />
  );
}

export default CalculatorDisplay;