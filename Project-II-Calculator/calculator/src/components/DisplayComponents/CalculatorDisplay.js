import React from 'react';
import './Display.css';

const Display = props => {
    return (
       <h1 className = {props.buttonStyle}>{props.text}</h1>
   );
}

export default Display;