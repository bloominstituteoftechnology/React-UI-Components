import React from 'react';
import './Button.css';

function ActionButton(props){
    return(
        <div className={props.class}>{props.text}</div>
    );
}

export default ActionButton;

{/* <div className="action-button">x</div>
<div className="action-button">&#8722;</div>
<div className="action-button">+</div>
<div className="action-button">=</div> */}