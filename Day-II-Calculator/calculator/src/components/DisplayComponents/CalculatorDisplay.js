import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className="display">
            <div className="display-text">{props.text}</div>
        </div>
    )
}

export default CalculatorDisplay;
