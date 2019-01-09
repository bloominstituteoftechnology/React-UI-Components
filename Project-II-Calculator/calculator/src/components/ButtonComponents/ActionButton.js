import React from 'react';
import './Button.css';


function ActionButton(props){
    return(
        <div className="action-button-wrapper">
            <button onClick={props.onClick} className={props.action.actionButtonStyle}  value={props.action.text}>{props.action.text}</button>
        </div>
    );
}

export default ActionButton;