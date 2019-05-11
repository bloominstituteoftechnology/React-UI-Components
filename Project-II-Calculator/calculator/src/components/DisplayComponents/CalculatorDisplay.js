import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className="calc-display" defaultValue="0">
        {props.value}
        </div>
    )
}

export default CalculatorDisplay;