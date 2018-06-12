import React from 'react';
import './Display.css';

const CalculatorDisplay = props => (
  <div className="display">
    <p>{props.value}</p>
  </div>
);

export default CalculatorDisplay;
