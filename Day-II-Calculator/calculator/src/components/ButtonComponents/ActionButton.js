import React from 'react';
import './Button.css';

const ActionButton = props => { 
    return (
        <div className = 'actionButton'>
            <button>{props.action}</button>
        </div>
    );
}

export default ActionButton;