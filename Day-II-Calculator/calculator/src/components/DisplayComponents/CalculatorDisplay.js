import React from 'react';
import './Display.css';


const CalculatorDisplay = props => {
    return <div className="calculator-display"> {props.name}</div>;
};


CalculatorDisplay.defaultProps = {
    name:" add stuff"
};

export default CalculatorDisplay;
