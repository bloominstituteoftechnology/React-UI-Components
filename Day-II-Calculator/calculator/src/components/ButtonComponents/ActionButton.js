import React from 'react';
import './Button.css';

const ActionButton = ({text, style, click}) => {
    return (
        // <div className={`button action-button ${text === 'clear' || text === 0 ? 'wide-button': ''}`}>
        <div 
            className='button action-button'
            style={style}
            onClick={click.bind(this, (text==='clear'?0:text))}
        >
            {text}
        </div>
    );
}

export default ActionButton;