import React from 'react';
import './Button.css';

const NumberButton = (props) => { return <p className={`${props.style}`}>{props.text}</p> };

NumberButton.defaultProps = {
    'style': 'default-num-bttn-style',
}

export default NumberButton;