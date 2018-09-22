import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <div className={props.className}>
            <div className={props.className2}>{props.text}</div>
        </div>
    )
}

export default NumberButton;