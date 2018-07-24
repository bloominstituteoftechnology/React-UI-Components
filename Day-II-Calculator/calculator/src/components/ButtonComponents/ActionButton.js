import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
    <div className = "actionButton">
        <div>{props.action}</div>
    </div>
    )
}

export default ActionButton; 