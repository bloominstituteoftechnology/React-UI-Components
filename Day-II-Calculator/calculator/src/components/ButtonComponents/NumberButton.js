import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <h1 className="font-weight-bold {props.buttonStyle}">{props.text}</h1>
    );
};

export default NumberButton;