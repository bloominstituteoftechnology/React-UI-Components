import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className="calculator">
            <div className="calculator-display">{props.text}</div>
        </div>
    )
};

export default CalculatorDisplay;