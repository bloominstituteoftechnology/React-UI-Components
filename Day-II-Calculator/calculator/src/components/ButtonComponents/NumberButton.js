import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <input type="button" className={props.buttonStyle} value={props.text} />
    )
}

export default NumberButton;