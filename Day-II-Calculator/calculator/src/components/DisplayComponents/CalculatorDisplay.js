import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div className="calculatordisplayContainer">
      <div className="displayWindow">{props.text}</div>
    </div>
  )
}

export default CalculatorDisplay