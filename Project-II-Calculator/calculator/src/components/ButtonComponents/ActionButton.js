import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
        <button className={`action-button ${props.type}`}>{props.text}</button>
    )
}


export default ActionButton;