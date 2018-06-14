import React from 'react';
import './Button.css';

const NumberButton = (props) => {

    return (
         <button className= {props.background}  onClick={props.onClick} >{props.number} </button>
    )
};
export default NumberButton;
