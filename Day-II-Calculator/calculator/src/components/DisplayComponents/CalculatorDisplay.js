import React from 'react';
import './Display.css';


const CalculatorDisplay = props => (
  <div className="calculator-display">
    <div className="display">{props.value}</div>
  </div>
);

export default CalculatorDisplay;