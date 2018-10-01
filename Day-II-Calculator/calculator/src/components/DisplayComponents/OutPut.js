import React from 'react';
import './Display.css';

const OutPut = (prop) => {
    return (
        <p className={prop.displayStyle}>{prop.output}</p>
    )
} 

export default OutPut