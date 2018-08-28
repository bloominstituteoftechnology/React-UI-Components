import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return(
        <p>
            {props.resultText}
        </p>
    );
}

export default CalculatorDisplay;