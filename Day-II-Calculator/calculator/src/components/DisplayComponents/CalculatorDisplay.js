import React from 'react';
import './Display.css';

const CalculatorDisplay = (prop) => {
    return (
        <h1 className='display'>{prop.buttonText}</h1>
    )
}

export default CalculatorDisplay;