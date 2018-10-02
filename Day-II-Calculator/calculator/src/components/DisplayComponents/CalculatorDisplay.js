import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <h1 className="calcDisplay">{props.display}</h1>
    );
}

export default CalculatorDisplay;