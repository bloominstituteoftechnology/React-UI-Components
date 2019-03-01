import React from 'react';
import './Button.css';

function ActionButton (props) {
    return (
        <button className={props.btnClassName}>{props.content}</button>
    );
} 

export default ActionButton;