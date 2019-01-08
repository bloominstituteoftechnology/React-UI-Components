import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
        <div className="action-button">{props.text}</div>
    )
}

export default ActionButton;