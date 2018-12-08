import React from 'react';
import './Button.css';

 const ActionButton = props => {
    return (
        <button className='btn actionButton'>{props.name}</button>
    )
 }

 export default ActionButton; 