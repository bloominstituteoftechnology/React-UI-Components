import React from 'react';
import './Button.css';

function ActionButton (props) {
    return (
        <button className={`act-btn ${props.buttonStyle}`}>{props.text}</button>
    );
}

export default ActionButton;