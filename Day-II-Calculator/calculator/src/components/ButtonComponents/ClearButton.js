import React from 'react';
import './Button.css';

const ClearButton = (props) => {
    return (
        <div className='clear'>
            <p>{props.text}</p>
        </div>
    );
}

export default ClearButton;