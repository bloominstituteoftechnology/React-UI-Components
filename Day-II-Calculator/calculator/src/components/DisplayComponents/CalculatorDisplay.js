import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return(
        <div className="result">
            {props.result}
        </div>
    );
}

export default CalculatorDisplay;