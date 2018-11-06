import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    return (
        <div className="displayDiv">
            {props.displayValue}
        </div>
    );
}