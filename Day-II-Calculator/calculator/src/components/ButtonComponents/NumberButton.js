import React from 'react';
import './Button.css';

const props = {
    buttonText: "goodbye"
}

const NumberButton = (props) => {
    return(
        <button>{props.buttonText}</button>
    );
}

export default NumberButton;