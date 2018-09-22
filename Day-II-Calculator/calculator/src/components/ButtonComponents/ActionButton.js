import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div class={props.buttonStyle}>{props.text}</div>
    )
};

export default ActionButton;