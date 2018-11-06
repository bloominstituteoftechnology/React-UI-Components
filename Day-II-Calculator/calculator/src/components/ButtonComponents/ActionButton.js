import React from 'react';
import './Button.css';



const ActionButtons = props => {
    return (
        <div className="ind-action-buttons">
        {props.button}
        </div>
    )
}

export default ActionButtons;