import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
    <div className="display">
        <div className="operation">{props.operation}</div>
        <div className="result">{props.result}</div>
    </div>
    );
    
}

export default CalculatorDisplay;