import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <button className="display">
            {props.name}
        </button>
    );
}

export default CalculatorDisplay;