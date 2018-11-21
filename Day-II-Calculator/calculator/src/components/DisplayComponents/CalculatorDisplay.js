import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className="calc-display" >{props.text}</div>
    )
};

CalculatorDisplay.defaultProps = {
    text: 0
  };

export default CalculatorDisplay;