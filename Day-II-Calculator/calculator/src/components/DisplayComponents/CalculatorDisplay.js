import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
  return(
    <div className={props.buttonStyle}>
      {props.CalculatorDisplay.text}
    </div>
  );
};

export default CalculatorDisplay;