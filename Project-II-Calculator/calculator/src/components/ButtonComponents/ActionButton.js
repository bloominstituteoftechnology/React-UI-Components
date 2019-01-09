import React from 'react';
import './Button.css';

function ActionButtons (props){

    const { name } = props.text;

    return (
        

        <button className={props.className}>{props.text.name}</button>
        
       
    )
}

export default ActionButtons