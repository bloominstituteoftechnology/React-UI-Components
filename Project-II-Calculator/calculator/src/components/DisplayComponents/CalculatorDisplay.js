import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
            <button className="displayStyle">{props.text}</button>
    )
}

export default CalculatorDisplay;
