import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    return <p>{props.currentValue}</p>;
}

export default CalculatorDisplay;
