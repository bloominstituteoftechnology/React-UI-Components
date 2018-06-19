import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
  return <div className={`display-styles ${props.displayStyle}`}>{props.name}</div>;
};

export default CalculatorDisplay;
