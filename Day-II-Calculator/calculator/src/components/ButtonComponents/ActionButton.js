import React from 'react';
import './Button.css';

function ActionButton(props) {
    console.log(props);
    return (
        <div className={props.buttonInfo.buttonStyle}>{props.buttonInfo.text}</div>
    );
}

export default ActionButton;

