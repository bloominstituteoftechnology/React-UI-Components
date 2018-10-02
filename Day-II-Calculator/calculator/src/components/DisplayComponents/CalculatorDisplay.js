import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div>
      <div className={props.displayStyle}>{props.text}</div>
    </div>
  )
}

export default CalculatorDisplay