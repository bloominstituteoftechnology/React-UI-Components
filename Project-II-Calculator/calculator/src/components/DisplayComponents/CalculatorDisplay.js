import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return(
        <div className="calculator-display">
            <h2>{props.evaluate}</h2>
            <h1>{props.screenActive}</h1>
        </div>
    )
}

export default CalculatorDisplay;