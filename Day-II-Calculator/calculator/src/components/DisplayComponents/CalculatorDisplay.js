import React from 'react';
import './Display.css';


const CalculatorDisplay = props => (
  <div className="calculator-display">
    <div>{props.value}</div>
  </div>
)

export default CalculatorDisplay;