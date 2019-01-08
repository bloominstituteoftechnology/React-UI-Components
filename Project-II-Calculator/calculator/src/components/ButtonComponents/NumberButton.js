import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return(
        <button className={props.buttonStyle} onClick={(e) => props.numberClick(e, props.text)}>{props.text}</button>
    )
}

export default NumberButton;