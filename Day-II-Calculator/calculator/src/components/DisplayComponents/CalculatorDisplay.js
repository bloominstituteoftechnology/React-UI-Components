import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <button className="displayButton">{props.name}</button>
    )
}

export default CalculatorDisplay;