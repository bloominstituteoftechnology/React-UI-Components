import React from 'react';
import './Display.css';

function CalculatorDisplay(props){
    return (
        <div className={props.displayType}> {props.display} </div>
    );
}


export default CalculatorDisplay;