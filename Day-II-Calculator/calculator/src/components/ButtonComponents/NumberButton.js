import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    const clickHandler = () => {
        console.log(props.number);
    };
    return (
         <button className= {props.background} onClick={clickHandler} >{props.number} </button>
    )
};
export default NumberButton;
