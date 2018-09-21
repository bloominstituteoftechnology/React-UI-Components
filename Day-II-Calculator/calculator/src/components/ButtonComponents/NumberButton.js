import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
            <button className={props.buttonStyle}>{props.text}</button>
    )
};

export default NumberButton;

//prop.displayNumber and set to 1, 2, 3