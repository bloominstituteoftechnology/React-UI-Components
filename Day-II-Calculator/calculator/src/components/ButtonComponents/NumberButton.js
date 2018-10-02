import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className={props.button.buttonStyle}>{props.button.value}</div>
    );
};

export default NumberButton;