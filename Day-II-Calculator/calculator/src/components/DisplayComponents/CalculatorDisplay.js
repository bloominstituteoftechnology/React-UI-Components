import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return <div className={props.displayStyle}>{props.value}</div>;
};

export default CalculatorDisplay;
