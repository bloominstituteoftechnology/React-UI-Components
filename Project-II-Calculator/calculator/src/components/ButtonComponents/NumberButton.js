import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <div className={props.className}>
            <p>{props.number}</p>
            <p>{props.text}</p>
        </div>
    );
};

export default NumberButton;