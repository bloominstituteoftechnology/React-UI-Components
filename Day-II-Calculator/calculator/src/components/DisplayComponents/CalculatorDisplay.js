import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div className="calc-display">{props.number}</div>
  );
};

CalculatorDisplay.defaultProps = {
  number : 0
}
export default CalculatorDisplay;
