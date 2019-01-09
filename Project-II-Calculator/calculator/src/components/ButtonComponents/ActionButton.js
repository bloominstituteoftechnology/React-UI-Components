import React from 'react';
import './Button.css';

const ActionButton = (props) =>{

        return <p className={`${props.name} ${props.buttonStyle}`} onClick={() => props.handleClick(props.symbol)}>{props.symbol}</p>

}

export default ActionButton;