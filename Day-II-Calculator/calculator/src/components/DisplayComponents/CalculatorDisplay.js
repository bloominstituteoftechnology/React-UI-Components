import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className={`display-button ${props.className}`}>
            <p>0</p>
        </div>
    );
};

export default CalculatorDisplay;