import React from 'react';
import './Button.css';


function ActionButton(props){
    return(
        <div className="action-button-wrapper">
            <button className={props.action.actionButtonStyle}>{props.action.text}</button>
        </div>
    );
}

export default ActionButton;