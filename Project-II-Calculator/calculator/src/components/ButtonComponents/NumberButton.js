import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className="num-button">{props.content}</button>
    );
};

export default NumberButton;