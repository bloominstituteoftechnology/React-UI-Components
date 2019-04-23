import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return(
        <div className = "display">
            <p>{props.text}</p>
        </div>
    )
}

export default CalculatorDisplay;
