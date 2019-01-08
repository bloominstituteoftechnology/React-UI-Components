import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    return (
        <div className= "display">
            <DynamicButton text = " " type =  "disLg"/>
        </div>
    );
};

function DynamicButton(props) {
    return (
        <button className = {`dynamic-button ${props.type}`}>{props.text}</button>
    )
}

export default CalculatorDisplay;