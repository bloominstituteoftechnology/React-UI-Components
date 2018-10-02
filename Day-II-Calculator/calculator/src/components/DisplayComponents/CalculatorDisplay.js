import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return <div className="calc-display">{props.total}</div>;
};

CalculatorDisplay.defaultProps = {
  total: '0'
};

export default CalculatorDisplay;
