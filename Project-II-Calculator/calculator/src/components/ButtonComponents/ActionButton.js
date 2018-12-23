import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div className="action-button">{props.content}</div>
    );
};

export default ActionButton;