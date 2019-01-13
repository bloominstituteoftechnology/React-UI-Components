import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div 
            className="action-button"
            onClick={props.handleOperand}
        >
            {props.content}</div>
    );
};

export default ActionButton;