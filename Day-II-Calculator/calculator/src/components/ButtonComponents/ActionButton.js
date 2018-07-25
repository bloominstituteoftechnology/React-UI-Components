import React from 'react';
import './Button.css';


const ActionButton = props => {
    return <input 
        type="button"
        className={props.buttonStyle}
        onClick={props.handleClick}
        value={props.label}
        
        />
}

export default ActionButton;