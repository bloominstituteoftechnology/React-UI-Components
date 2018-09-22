import React from 'react';
import './Button.css';

const ActionButton = (props)    =>  {
    return(
        <div className={props.buttonStyle} onClick={()  =>  props.onButtonClick(props.text)}>
            {props.text}
        </div>
    )
}

export default ActionButton;
