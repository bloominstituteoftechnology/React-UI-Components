import React from 'react';
import './Display.css';

const CalculatorDisplay = function(props) {
    return (
        <div className="display">
            <h1 className="displayDigits">{props.nums}</h1>
        </div>
    )
};

export default CalculatorDisplay;