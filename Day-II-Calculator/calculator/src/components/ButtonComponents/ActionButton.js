import React from 'react';
import './Button.css';

const ActionButton =(props)=>{
    const myClasses ={

    }
    return(
        <button className={props.actionClass}>{props.text}</button>
    )
}
export default ActionButton;