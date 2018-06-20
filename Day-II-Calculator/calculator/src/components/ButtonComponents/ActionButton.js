import React from 'react';
import './Button.css';

const ActionButton = props => {
    return <button className={`action ${props.custom}`}>{props.text}</button>
};

export default ActionButton