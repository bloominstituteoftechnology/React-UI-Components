import React from 'react';
import './Button.css';

const ActionButton = props => (
    <div onClick={() => props.handlePress(props.btn)}
        className='action-btn'
    >
        <span>{props.btn}</span>
    </div>
);

export default ActionButton;