import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={`num-btn-styles col-3 ${props.extraStyle}`}>{props.text}</button>
    );
};

export default NumberButton;