import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button className={props.buttonType.buttonStyle}>
            {props.buttonType.text}
        </button>
    );
}

export default ActionButton;