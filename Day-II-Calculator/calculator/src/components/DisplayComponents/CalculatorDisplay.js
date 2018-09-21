import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className={`display-button ${props.className}`}>
            {props.text}
        </div>
    );
};

export default CalculatorDisplay;