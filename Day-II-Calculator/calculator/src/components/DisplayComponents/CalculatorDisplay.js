import React from 'react';
import './Display.css';

const CalculatorDisplay = (props: { value: string }) => (
  <div className="CalculatorDisplay">{props.value}</div>
);

export default CalculatorDisplay;
