import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button className={`btn width3 ${props.buttonStyle}`}>{props.text}</button>
    );
};

export default ActionButton;