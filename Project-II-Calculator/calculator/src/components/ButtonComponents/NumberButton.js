import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
            <button className={`buttonStyle ${props.functionality}`} >{props.text}</button>     
    )
}

export default NumberButton;
