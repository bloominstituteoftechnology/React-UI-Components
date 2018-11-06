import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    return (
        <div className="displayDiv">
            <div className="displayValue">
                {props.displayValue}
            </div>
        </div>
    );
}

export default CalculatorDisplay;