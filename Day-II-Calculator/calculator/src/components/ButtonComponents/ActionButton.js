import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
       <div className= 'action'>
            <button className='actionButton'>{props.buttonText}</button>
       </div>
    )
}
export default ActionButton;