import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className={props.buttonStyle}>
            <div> {props.CalculatorDisplay.text} </div>
        </div>
    );
}

export default CalculatorDisplay;