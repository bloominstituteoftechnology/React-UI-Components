import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div className={props.buttonStyle}>
            <div> {props.ActionButton.text} </div>
        </div>
    );
}

export default ActionButton;