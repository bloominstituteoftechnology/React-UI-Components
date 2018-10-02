import React from 'react';
import './Button.css';
function ActionButton(prop){
    return (
        <div className="action-button">
            <h1>{prop.buttonOnProps.value}</h1>
        </div>
    )
}
export default ActionButton;
