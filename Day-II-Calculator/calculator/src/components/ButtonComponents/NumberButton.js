import React from 'react';
import './Button.css';

const NumberButtons = (props) => {
    return (
    <button className={props.buttonStyle}>{props.text}</button>
    )
}

export default NumberButton;