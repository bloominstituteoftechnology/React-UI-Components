import React from 'react';
import './Display.css';

export const CalcInput = props => (
    <input onClick={props.onClick}
    placeholder={props.placeholder} />
);

const CalculatorDisplay = () => {
    const NumberDisplay = props => {
        return <p className={props.style}>{props.value}</p>;
    };
        NumberDisplay.defaultProps = {
            value: "",
            style: 'num-display'
        };
    
    return (
        <div className="calc-display">
        <NumberDisplay className="num-display" value="0"/>
            </div>
    );
};

export default CalculatorDisplay;
