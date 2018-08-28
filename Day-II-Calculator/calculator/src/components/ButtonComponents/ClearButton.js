import React from 'react';
import './Button.css';


const ClearBut = (prop) => {
    return (
        <div className="ClearButton">
            <button class="clear">{prop.buttonText}</button>
        </div>
    )
}

export default ClearBut;