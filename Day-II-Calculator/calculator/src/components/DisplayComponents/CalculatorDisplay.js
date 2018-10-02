import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className={props.style}
        >
            {props.text}
        </div>
    )
}

export default CalculatorDisplay;
