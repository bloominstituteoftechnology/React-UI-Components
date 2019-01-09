import React from 'react';
import './Button.css';

const ClearButton = function(props) {
    return (
        <div className="clear-button"  onClick={function() { alert('click'); }}>
            <h1>{props.number}</h1>
        </div>
    )
} 

export default ClearButton;