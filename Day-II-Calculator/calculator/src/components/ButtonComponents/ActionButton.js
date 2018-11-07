import React from 'react';
import './Button.css';



const ActionButtons = props => {
    return (
        <div className={props.buttonStyle}>
        {props.button}
        </div>
    )
}

export default ActionButtons;