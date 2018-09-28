import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div className={props.style}><h2>{props.text}</h2></div>
    );
};
    
export default ActionButton;