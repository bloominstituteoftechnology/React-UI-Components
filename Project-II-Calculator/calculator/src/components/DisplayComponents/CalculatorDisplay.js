import React from 'react';
import './Display.css';

const Display = props => {
    return (
       <h1 className = {props.display.buttonStyle}>{props.display.text}</h1>
   );
}

export default Display;