import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return ( <button className = {
            `display ${props.customStyleProp}`
        } > {props.text} </button> 

    );
};

export default CalculatorDisplay;