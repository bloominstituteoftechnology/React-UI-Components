import React from 'react';
import './Button.css';

const NumberButton = props => {
    return <input
        type="button"
        className={props.buttonStyle}
        onClick={props.handleClick}
        value={props.label}
        
        />

}

export default NumberButton;