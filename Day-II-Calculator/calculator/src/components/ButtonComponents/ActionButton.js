import React from 'react';
import './Button.css';

const ActionButton = (props)    =>  {
    return(
        <div className={props.classname}>
            {props.value}
        </div>
    )
}

export default ActionButton;
