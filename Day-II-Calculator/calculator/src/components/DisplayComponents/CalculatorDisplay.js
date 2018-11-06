import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    return <div className='calc-display'>{props.content}</div>;
}

export default CalculatorDisplay;
