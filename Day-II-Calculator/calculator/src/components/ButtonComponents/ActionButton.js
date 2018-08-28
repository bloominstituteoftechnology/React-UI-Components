import React from 'react';
import './Button.css';

const props = {
    buttonText: "hello"
}

const ActionButton = (props) => {
    return(
        <button>{props.buttonText}</button>
    );
}

export default ActionButton;