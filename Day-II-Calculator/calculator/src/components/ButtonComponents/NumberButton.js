import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button ClassName={`num-butt ${props.bgColor}`}>{props.text}</button>
    );
};

export default NumberButton;