import React from 'react';
import './Display.css';

export const Display = (props) =>{
    return (<div  className="topDisplay"><span className="resultsText">{props.text}</span></div>);
}

export default Display;