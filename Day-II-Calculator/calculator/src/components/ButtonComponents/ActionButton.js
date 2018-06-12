import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button 
            className={`action-button-styles ${props.customStyle}`}>
                {props.text}
        </button>
    );
};

export default ActionButton;