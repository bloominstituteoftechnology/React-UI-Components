import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <span className={`btn-styles ${props.extraStyles}`}>{props.text}</span>
    )
};

export default ActionButton;