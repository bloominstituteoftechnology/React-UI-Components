import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
  return <div className="calc-total">{props.total}</div>;
};

export default CalculatorDisplay;