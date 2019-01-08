import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {

    return(
        <div className="CalculatorDisplay">{props.value}</div>
    )
}

export default CalculatorDisplay;