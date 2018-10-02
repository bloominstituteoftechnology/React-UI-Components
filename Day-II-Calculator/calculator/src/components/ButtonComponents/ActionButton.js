import React from 'react';
import './Button.css';
import NumberButton from './NumberButton'

const ActionButton = props => {
   
    return (
        <div className="actionButtonDiv">
        <button className={`actionButton ${props.style}`}>{props.text}</button>
        </div>
    );
}

export default ActionButton;
