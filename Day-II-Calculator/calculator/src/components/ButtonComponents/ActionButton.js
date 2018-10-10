import React from 'react';
import './Button.css';

const ActionButton = (prop) => {
    return (
       <div className= 'action'>
            <button className='actionButton'>{prop.buttonText}</button>
       </div>
    )
}
export default ActionButton;