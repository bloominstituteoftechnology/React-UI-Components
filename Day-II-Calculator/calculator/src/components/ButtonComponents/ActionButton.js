import React from 'react';
import './Button.css';


const ActionButton = props => {
    return (
        <button 
        className={`button-style ${props.actionStyleProp}`}>{props.text}
        </button>
    );
};

export default ActionButton;