import React from 'react';
import './Button.css';

function ClearButton(props){
    return(
        <button className= {props.buttonStyle}>{props.text}</button>
    );
}

export default ClearButton;