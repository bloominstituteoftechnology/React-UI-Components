import React from 'react';
import './Display.css';

const Display = props => {
    return (
        <div > <input className = {`display-styles`} type = "text" placeholder="0">{props.text}</input></div>
    );
};




export default Display;