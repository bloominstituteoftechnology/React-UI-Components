import React from 'react';
import './Button.css';

const FunctionButton = (props) => { return <p className={`${props.style}`}>{props.text}</p>};

FunctionButton.defaultProps = {
    'style': 'function-button',
}

export default FunctionButton;