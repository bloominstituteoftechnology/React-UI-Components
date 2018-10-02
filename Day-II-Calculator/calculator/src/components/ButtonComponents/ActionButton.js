import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
        <div className={props.buttonInfo.buttonStyle}>Here{props.buttonInfo.text}</div>
    );
}

export default ActionButton;

