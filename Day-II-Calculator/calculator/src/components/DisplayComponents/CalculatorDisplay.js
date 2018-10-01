import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {

    return (
    
    <h1 className={props.className}> {props.num} </h1>
    );
}

export default CalculatorDisplay;