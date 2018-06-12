import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={`button-styles ${props.buttonStyle}`}>{props.text}</button>
    );
}

NumberButton.defaultProps = {
    buttonStyle: 'default-button-style',
}

export default NumberButton;
