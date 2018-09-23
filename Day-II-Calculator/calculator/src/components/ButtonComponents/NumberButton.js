import React from 'react';
import './Button.css';

const NumberButton= (props)=>{
    let number=props.number;
    let buttonStyle=props.type;
    let classname="";
    if(props.type==="num"){
        classname="whiteback";
    }else if(props.type==="operator"){
        classname="redback";
    }

    return(
    <button className={classname}>
         {number}
    </button>
    )
}

export default NumberButton;