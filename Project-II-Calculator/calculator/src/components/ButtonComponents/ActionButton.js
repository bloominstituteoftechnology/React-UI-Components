import React from 'react';
import './Button.css';

const ActionButton = props => {
    return(
        <button className={props.buttonStyles}>{props.text}</button>
    );
};

export default ActionButton;
