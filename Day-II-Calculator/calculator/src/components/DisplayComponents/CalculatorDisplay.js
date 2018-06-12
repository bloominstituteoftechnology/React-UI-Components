import React from 'react';
import './Display.css';


const CalculatorDisplay = (props) => {
    const clickHandler = () => {
        console.log(props.number);
    };
    return (
         <button className= {props.background} onClick={clickHandler} >{props.number} </button>
    )
};
export default CalculatorDisplay;
