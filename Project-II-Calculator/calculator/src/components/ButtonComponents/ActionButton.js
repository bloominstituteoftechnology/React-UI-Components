import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className="action-button">{props.content}</button>
    );
};

export default ActionButton;