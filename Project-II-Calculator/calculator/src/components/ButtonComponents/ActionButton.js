import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div className={props.className}>
            <h2>{props.number}</h2>
        </div>
    );
};

export default ActionButton;
