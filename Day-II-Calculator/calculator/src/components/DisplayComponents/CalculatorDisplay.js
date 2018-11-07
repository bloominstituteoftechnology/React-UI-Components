import React from 'react';
import './Display.css';

function Display(props){
    return(
        <div className={props.className}>{props.text}</div>
    );
}
export default Display;