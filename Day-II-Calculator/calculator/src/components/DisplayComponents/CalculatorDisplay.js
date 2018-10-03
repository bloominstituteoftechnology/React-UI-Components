import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className={props.style}>
            <h1>{props.symbol}</h1>
        </div>
    )
}

export default CalculatorDisplay;