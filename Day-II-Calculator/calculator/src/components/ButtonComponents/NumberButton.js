import React from 'react';
import './Button.css';

const NumberButton=props=>{
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    )
}
NumberButton.defaultProps{
    color: white,
    background-color: gray
}
export default NumberButton;