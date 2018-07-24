import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={`actn-btn-styles col-9 ${props.extraStyle}`}>{props.text}</button>
    );
};

export default ActionButton;