import React from 'react';
import './Button.css';

const ClearButton = props => {
    return (
        <div>
            <button className="clear-btn">{props.text}</button>
        </div>
    )
}

export default ClearButton;