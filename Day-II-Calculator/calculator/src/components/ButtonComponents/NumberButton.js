import React from 'react';
import './Button.css';

const NumberButton = props => (
    <div onClick={() => props.handlePress(props.btn)}
        className={`number-btn ${props.className}`}
    >
        <span>{props.btn}</span>
    </div>
);

export default NumberButton;