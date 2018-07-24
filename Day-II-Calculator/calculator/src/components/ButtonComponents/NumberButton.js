import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={`btn-styles ${props.extraStyles}`}>{props.text}</button>
    );
};

export default NumberButton;