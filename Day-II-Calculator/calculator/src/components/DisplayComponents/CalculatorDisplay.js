import React from 'react';
import './Display.css';

function CalculatorDisplay (props) {
    return (
        <div className="displayClass">
            <h1>{props.numTotal}</h1>
        </div>
    );
}

export default CalculatorDisplay;