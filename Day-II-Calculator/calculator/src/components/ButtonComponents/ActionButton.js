import React from 'react';
import './Button.css';


const ActionButton = props => {
    return (
        <div>
            <button>{props.action.action}</button>
        </div>
    );
};

export default ActionButton;