import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
  return (
    <div className={props.className}>{props.data}</div>
  );
};

export default CalculatorDisplay;