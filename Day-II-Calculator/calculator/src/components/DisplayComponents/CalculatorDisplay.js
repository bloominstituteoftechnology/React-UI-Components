import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
  return (
    <div className="display bordered">
      {props.number}
    </div>
  )
}

export default CalculatorDisplay;
