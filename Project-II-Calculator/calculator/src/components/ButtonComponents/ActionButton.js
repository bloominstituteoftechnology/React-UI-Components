import React from 'react';
import './Button.css';


function ActionButton(props) {
    return (
        <button className={` ActionButton ${props.buttonAction}`}>{props.text}</button>
    )
};

export default ActionButton;