import React from 'react';
import './Button.css';

const ActionButton = props => {
    return <button className = "actionButtonStyles"> {props.name}</button>;
}

export default ActionButton;