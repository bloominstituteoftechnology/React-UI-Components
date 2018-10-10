import React from 'react';
import './Button.css';

const ClearButton = (prop) => {
    return (
        <button className='clearButton'>{prop.buttonText}</button>
    )
}

export default ClearButton;