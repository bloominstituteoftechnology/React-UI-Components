import React from 'react';
import './Display.css';


const CalculatorDisplay = (props) => {
    return (
        <div className="calculator-display">
            {props.initialValue}
        </div>
    );
};

export default CalculatorDisplay;
