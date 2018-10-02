import React from 'react';
import './Display.css';

const Display = props =>{
    return(
        <div className="display">
            <h1 className="output">0{props.numberbtn}</h1>
        </div>
    );
}

export default Display;
