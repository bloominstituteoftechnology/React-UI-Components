import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <button className={props.displayStyle}>{props.text}</button>
    )
}

export default NumberButton;
