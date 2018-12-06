import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
            <button className={`buttonStyle ${props.lengthStyle} ${props.func}`}>{props.text}</button>
    )
}

export default ActionButton;
