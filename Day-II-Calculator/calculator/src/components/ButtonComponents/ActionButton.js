import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div className="action-button" {...props}>
            <div className="action-button-text">{props.text}</div>
        </div>
    )
}

export default ActionButton;
