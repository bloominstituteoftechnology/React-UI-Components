import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={`btn-styles ${props.extraStyles}`}>{props.text}</button>
    );
};


export default ActionButton;
