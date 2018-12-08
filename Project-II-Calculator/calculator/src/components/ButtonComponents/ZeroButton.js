import React from 'react';
import './Button.css';

const ZeroButton = props => {
    return (
        <div>
            <button className="zero-btn">{props.text}</button>
        </div>
    )
}

export default ZeroButton;