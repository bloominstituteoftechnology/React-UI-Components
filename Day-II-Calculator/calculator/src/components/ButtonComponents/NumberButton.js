import React from 'react';
import './Button.css';

const NumberButton = props => {
    return <button className={`btn ${props.defaultStyle}`}>{props.name}</button>
};

NumberButton.defaultProps = {
    name: 0,
    defaultStyle: "btn"
};

export default NumberButton;