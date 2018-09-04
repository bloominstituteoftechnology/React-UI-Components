import React from 'react';
import './Button.css';


const ActionButton = (props) => (<div className='action'>
    <div className={props.buttonStyle}>{props.text}</div> 
    </div>);


export default ActionButton;