import React from 'react';
import './Display.css';

// Name CalculatorDisplay
const CalculatorDisplay = props => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

// Export the deafult
export default CalculatorDisplay;