import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    // prop.displayNumber === 1;
    return (
        <button className = {props.buttonStyle}>
            {props.text}
        </button>
    );
}

NumberButton.defaultProps = {
    text: "Enter Number Text",
    buttonStyle: "number",
}

export default NumberButton;