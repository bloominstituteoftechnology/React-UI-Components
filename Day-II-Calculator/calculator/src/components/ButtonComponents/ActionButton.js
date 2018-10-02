import React from 'react';
import './Button.css';

const ActionButton = ({type}) => {
    return (
        <div className={`button action-button ${type === 'clear' ? 'wide-button': ''}`}>
            {type}
        </div>
    );
}

export default ActionButton;