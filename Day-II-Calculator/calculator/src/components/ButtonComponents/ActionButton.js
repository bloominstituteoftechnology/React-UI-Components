import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div className={props.style}>{props.text}</div>
    );
};

export default ActionButton;