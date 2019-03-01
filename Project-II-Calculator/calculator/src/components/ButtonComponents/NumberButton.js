import React from 'react';
import './Button.css';

function NumberButton (props) {
    return (
        <button className={props.btnClassName}>{props.content}</button>
    );
} 

export default NumberButton;