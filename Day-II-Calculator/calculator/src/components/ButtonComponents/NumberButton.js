import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <span class={`btn-styles ${props.extraStyles}`}>{props.text}</span>
    )
};

NumberButton.defaultProps = {
    text: 'Default Text',
    extraStyles: 'num-styles'
  };

export default NumberButton;