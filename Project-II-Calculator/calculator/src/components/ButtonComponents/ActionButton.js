import React from 'react';
import './Button.css';

//These are the following buttons: DIVISION MULTIPLY EQUAL PLUS MINUS and CLEAR

const ActionButton = (props) => {
    return(
        <button>{props.type}</button>
    );
}

export default ActionButton;