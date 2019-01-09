import React from 'react';
import './Button.css';

const ZeroButton = function(props) {
    return (
        <div className="zero-button"  onClick={function() { alert('click'); }}>
            <h1>{props.number}</h1>
        </div>
    )
} 

export default ZeroButton;