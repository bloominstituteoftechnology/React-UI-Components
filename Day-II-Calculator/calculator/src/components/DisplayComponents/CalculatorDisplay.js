import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return <div className={props.style}>{props.value}</div>;
};

export default CalculatorDisplay;
