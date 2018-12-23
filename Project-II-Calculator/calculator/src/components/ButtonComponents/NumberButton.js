import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className="num-button">{props.number}</div>
    );
};

export default NumberButton;