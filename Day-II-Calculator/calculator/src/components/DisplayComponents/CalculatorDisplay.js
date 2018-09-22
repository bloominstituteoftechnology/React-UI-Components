import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className = {props.style}>
            {props.text}
        </div>
    );
}

CalculatorDisplay.defaultProps = {
    text: "0",
    style: "display",
}

export default CalculatorDisplay;