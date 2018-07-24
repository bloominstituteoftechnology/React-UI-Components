import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <span class={`btn-styles ${props.extraStyles}`}>{props.text}</span>
    )
};

export default NumberButton;