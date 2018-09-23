import React from 'react';
import './Button.css';


const ActionButton=(props)=>{
    let text=props.text;
    return(
        <button className="action">{text}</button>
    )
}

export default ActionButton;