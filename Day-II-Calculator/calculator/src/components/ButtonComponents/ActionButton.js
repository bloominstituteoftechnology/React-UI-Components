import React from 'react';
import './Button.css';

const ActionButton = (props) =>{
    return (
        <div>
            <i className={props.icon}></i>
        </div>
    )
}

export default ActionButton;