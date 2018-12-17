import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return(<div className = "calculator-display"><span>{props.content}</span></div>);
};


export default CalculatorDisplay;
