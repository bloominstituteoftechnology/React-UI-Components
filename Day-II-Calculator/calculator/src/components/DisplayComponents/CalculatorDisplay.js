import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div className="calculator-display">
      <div className="calculator-text">{props.total}</div>
    </div>
  )
}

export default CalculatorDisplay;