import React from 'react';
import './Button.css';

const NumberButton = (props) =>  {
    return(
        <div className={props.buttonStyle} onClick={()  =>  props.onButtonClick(props.text)}>
            {props.text}
        </div>
    )
}

export default NumberButton;
