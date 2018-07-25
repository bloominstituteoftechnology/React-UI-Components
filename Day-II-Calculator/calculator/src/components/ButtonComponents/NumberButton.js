import React from 'react';
import './Button.css';

const ButtonCreator = props =>

function NumberButton (props) {
    return (
        <button className={`btn ${props.extraStyles}`}>{props.text}</button>
    )
} 

NumberButton.defaultProps = {
    text: 'N/A'
}

export default NumberButton