import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div>
            <h1>{props.action}</h1>
        </div>
    )
};

export default ActionButton;