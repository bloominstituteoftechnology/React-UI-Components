import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <button className={props.buttonType.buttonStyle}>
            {props.buttonType.text}
        </button>
    );
}

export default NumberButton;