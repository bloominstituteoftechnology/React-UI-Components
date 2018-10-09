import React from 'react';
import './Display.css';

const CalculatorDisplay = (prop) => {
    return (
        <h2 className='display'>{prop.buttonText}</h2>
    )
}

export default CalculatorDisplay;