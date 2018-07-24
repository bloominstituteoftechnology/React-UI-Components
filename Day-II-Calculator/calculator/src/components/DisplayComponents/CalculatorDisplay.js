import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => { return <p className={`${props.style}`}>{props.text}</p> };

CalculatorDisplay.defaultProps = {
    'style': 'calc-display-default',
}

export default CalculatorDisplay;
