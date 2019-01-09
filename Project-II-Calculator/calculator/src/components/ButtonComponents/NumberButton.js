import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <button>{props.num}</button>
    );
};

export default NumberButton;