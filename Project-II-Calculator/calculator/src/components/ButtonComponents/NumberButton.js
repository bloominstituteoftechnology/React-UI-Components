import React from 'react';
import './Button.css';

function numbersArea (props){

    const { name } = props.text;

    return (
        

        <button className={props.className}>{props.text.name}</button>
        
       
    )
}

export default numbersArea 