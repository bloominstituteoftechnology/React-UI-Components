import React from 'react';
import './Button.css';


const NumBut = (prop) => {
    return (
        <div className="numberButtons">
            <button class="numNums">{prop.buttonText}</button>
        </div>
    )
}

export default NumBut;