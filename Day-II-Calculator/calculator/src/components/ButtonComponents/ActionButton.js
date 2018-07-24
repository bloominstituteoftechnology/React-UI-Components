import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
    <div className = "actionButton" data-txt = {props.type} onClick = {() => props.click(props.type)}>
        <div>{props.text}</div>
    </div>
    )
}

export default ActionButton; 