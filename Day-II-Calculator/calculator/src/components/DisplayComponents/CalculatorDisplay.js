import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <input type="text" className={props.buttonStyle} defaultValue={props.text} />
    )
}

export default CalculatorDisplay;