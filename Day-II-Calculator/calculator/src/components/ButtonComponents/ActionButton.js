import React from 'react';
import './Button.css';


const ActionButton = props => {
    return (
        <div>
            <button className={props.buttonStyle}>{props.action.action}</button>
        </div>
    );
};

export default ActionButton;