import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
    // <h3> {props.text} </h3>
    <button className={props.buttonStyle}>{props.text}</button>
    );
}

export default NumberButton;