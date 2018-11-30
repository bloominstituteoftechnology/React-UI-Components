import React from 'react';
import './Button.css';

const NumberButton = props => <button className={`btn baby-btn ${props.extraStyle}`}>{props.name}</button>


NumberButton.defaultProps = {
    name: 'Please stop forgetting about me'
}

export default NumberButton;
