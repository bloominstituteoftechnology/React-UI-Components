import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return <div className="display-screen">{props.action}</div>;
};

export default CalculatorDisplay;
