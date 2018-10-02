import React from 'react';
import './Button.css';


const ActionButton = props => {
    return (
        <div>
            <button className={props.buttonStyle}>{props.actions.action}</button>
        </div>
    );
};

export default ActionButton;