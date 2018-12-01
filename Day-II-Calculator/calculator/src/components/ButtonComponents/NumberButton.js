import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={`btn one-quarter-button ${props.extraStyle}`}>{props.name}</button>
    )
}

NumberButton.defaultProps = {
    name: "default"
}

export default NumberButton;