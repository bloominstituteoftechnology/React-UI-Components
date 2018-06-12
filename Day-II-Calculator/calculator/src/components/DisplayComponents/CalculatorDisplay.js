import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return <div className={props.display}>{props.displayText}</div>
}

export default CalculatorDisplay;