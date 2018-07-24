import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div className='display'>
      <h1>{props.value}</h1>
    </div>
  )
}

export default CalculatorDisplay;
