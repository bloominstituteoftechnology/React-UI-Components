import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
    <div className="calculator-display">
    <p className="calculator-output">{props.text}</p>
    </div>
    );

};

export default CalculatorDisplay;