import React from 'react';
import './Button.css';


const ActionButton = props => {
    return <button className = 'action-button'> {props.name}</button>
}

export default ActionButton;