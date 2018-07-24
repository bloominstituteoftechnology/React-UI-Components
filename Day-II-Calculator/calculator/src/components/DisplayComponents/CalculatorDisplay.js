import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return(
        <div className="result">
            <p>{props.result}</p>
        </div>
    );
}

export default CalculatorDisplay;