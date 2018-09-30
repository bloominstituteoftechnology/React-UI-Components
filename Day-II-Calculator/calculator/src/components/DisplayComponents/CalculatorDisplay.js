import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    // uses 1 prop: display (what to display on screen)
    return (
        <div className="display">{props.value}</div>
    );
};

export default CalculatorDisplay;