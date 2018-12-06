import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div>
            <button className={`buttonStyle ${props.lengthStyle} ${props.func}`}>{props.text}</button>
        </div>
    )
}

export default ActionButton;
