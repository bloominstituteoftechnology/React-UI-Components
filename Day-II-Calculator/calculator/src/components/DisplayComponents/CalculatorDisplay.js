import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div className="CalculatorDisplay">
      {props.displayValue} 
    </div>
  )
}

export default CalculatorDisplay;