import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {

    return (
        <div className={props.class.style}>
            <div className="number-display">{props.number.text}</div>
        </div>
    );
};

export default CalculatorDisplay;
