import React from 'react';
import './Button.css';

function ActionButton(props){
    return <div className={props.actionButton.style}>{props.actionButton.text}</div>
};

export default ActionButton;