import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <h1 className ={props.display.buttonStyle}>{props.display.text}</h1>
    );
}

export default CalculatorDisplay;