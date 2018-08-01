
import React from 'react';
import './Button.css';

const ActionButton = props => { 

    return (

        <div className={`lgBtn ${props.className}`}>{props.text}</div>

    ); 
};

export default ActionButton;