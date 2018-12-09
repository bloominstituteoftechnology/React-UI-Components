import React from 'react';
import './Button.css';

// Name ActionButton
const ActionButton = props => {
    return (
        <div>
            <button className='action-btn'>{props.text}</button>
        </div>
    )
}

// Export the deafult
export default ActionButton;