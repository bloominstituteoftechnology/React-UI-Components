import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
  return <div className="display"><span>{`${props.text}`}</span></div>
}

export default CalculatorDisplay;