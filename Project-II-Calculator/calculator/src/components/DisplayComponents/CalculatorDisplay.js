import React from 'react';
import './Display.css';


const CalculatorDisplay = props => {
    return (
        <div className={props.button.displayStyle}>{props.button.text}</div>
    );
};


export default CalculatorDisplay;