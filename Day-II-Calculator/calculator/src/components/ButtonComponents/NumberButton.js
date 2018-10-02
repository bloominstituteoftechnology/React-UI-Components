import React from 'react';
import './Button.css';
function NumberButton(prop){
    return (
        <div className="number-button">
            <h1>{prop.buttonOnProps.value}</h1>
        </div>
    )
}
export default NumberButton;
