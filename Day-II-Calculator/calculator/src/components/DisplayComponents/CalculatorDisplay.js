import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className="display">
            <div className="displayNum">{props.text}</div>
            </div>
    );
}

export default CalculatorDisplay;
