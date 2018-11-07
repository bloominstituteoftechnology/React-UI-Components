import React from 'react';
import './Display.sass';

function CalculatorDisplay(props) {
    return <p className="calculator-display">{props.currentValue}</p>;
}

export default CalculatorDisplay;
