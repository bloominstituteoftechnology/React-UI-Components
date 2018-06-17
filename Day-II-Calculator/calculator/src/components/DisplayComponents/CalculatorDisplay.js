import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return <div className = 'display'>{props.displayValue}</div>
}

export default CalculatorDisplay;