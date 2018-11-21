import React from 'react';
import './Display.css';


const Display = (props) => {
    return (
    <div className = "display">
        <div className = "displayNum" >{props.value}</div>
    </div>)
}

export default Display; 
