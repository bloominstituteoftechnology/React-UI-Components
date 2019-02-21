import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={`zero-clear-buttion ${props.className}`}>{props.text}</button>
    )
}

export default ActionButton;