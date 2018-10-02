import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className={props.display.displayStyle}>{props.display.value}</div>
    );
};

export default CalculatorDisplay;