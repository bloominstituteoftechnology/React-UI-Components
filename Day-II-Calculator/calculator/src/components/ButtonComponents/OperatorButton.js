import React from 'react';
import './Button.css';
function OperatorButton(prop){
    return (
        <div className="operator-button">
            <h1>{prop.buttonOnProps.value}</h1>
        </div>
    )
}
export default OperatorButton;