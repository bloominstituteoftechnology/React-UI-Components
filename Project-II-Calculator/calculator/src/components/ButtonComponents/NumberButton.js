import React from 'react';
import './Button.css';


const NumberButton = props => {
    return (
        <button style={props.buttonStyle}>{props.number}</button>
    )
}

export default NumberButton;