import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <button className={props.type}>{props.type}</button>
        )
}

export default NumberButton;