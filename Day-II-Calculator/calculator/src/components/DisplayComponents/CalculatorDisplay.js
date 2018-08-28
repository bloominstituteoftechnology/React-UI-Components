import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className="display">
            <div className="display-result">
                {props.result}
            </div>
        </div>
    )
}

export default CalculatorDisplay;