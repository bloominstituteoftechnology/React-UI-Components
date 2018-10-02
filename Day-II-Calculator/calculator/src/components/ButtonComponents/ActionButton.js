import React from 'react';
import './Button.css';

const ActionButton = ({text, style}) => {
    return (
        // <div className={`button action-button ${text === 'clear' || text === 0 ? 'wide-button': ''}`}>
        <div 
            className='button action-button'
            style={style}
        >
            {text}
        </div>
    );
}

export default ActionButton;