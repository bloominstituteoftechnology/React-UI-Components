import React from 'react';
import './Button.css';

// Name OperatorButton
const OperatorButton = props => {
    return (
        <div>
            <button className='red-btn'>{props.text}</button>
        </div>
    )
}

// Export the deafult
export default OperatorButton;