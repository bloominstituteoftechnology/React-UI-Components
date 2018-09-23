import React from 'react';
import './Button.css';



export const ActionButton = (props) => {

    return <button className = {props.buttonStyle}
        //On Click get the text value.
        onClick = { () => props.handleClick(props.value)} > 
        {props.value} </button>
    
}