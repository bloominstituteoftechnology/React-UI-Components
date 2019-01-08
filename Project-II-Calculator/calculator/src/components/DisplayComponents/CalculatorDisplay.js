import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div className="calculator-display">
      <h1>{props.dispVal}</h1>
    </div>
  )
}

export default CalculatorDisplay;