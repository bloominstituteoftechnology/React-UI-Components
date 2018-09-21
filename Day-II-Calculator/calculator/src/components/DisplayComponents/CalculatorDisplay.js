import React from 'react';
import './Display.css';


const CalculatorDisplay = (props) => {
    return (
        <div className={props.displayStyle}>
           <span>{props.text}</span>
        </div>
    );
};

export default CalculatorDisplay;