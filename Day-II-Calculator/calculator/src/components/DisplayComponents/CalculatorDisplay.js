import React from 'react';
import './Display.css';


const CalculatorDisplay = (props) => {
    
    return (
         <button className= {props.background} >{props.number} </button>
    )
};
export default CalculatorDisplay;
