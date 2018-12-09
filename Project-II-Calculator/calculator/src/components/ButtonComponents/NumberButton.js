import React from 'react';
import './Button.css';

// Name NumberButton
const NumberButton = props => {
    return (
        <div>
            <button className='number-btn'>{props.text}</button>
        </div>
    )
}

// Export the deafult
export default NumberButton;