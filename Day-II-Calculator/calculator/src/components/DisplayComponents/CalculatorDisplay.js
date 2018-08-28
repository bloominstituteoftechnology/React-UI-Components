import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
  return (
    <div className={`calculator-display ${props.buttonStyle}`}>
      {props.text}
    </div>
  );
}

export default CalculatorDisplay;
