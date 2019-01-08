import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {

    return(
        <div className="CalculatorDisplay">
        
        {props.activeInput}
            <span className="Equation">{props.equation}</span>
        </div>
    )
}

export default CalculatorDisplay;