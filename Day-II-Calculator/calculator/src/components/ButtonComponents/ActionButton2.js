import React from 'react';
import './Button.css';
const ActionButton = props =>{
    return(
        <div className = "Action-Button">{props.name}</div>
    )
}
export default ActionButton;