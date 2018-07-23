import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <h1 className="font-weight-bold {props.buttonStyle}">{props.text}</h1>
    );
};

export default ActionButton;