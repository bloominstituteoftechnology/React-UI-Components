import React from 'react';
import './Button.css';

const NumberButton = (props) =>  {
    console.log(props.className)
    return(
        <div className={props.classname}>
            {props.value}
        </div>
    )
}

export default NumberButton;
