import React from 'react';
import './Display.css';

function CalculatorDisplay (props) {
    return (
        <div classname = 'calculator-display'>
            <p>
            {props.text}
            </p>
        </div>
    );
};

export default CalculatorDisplay;