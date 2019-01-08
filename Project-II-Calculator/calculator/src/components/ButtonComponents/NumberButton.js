import React from 'react';
import Button from './Button'
import './Button.css';


function NumberButton(props){
    return(
        <div className="numbers">
            {props.buttons.filter(item=>item.type==="number").map( button => < Button item = {button} key={button.id} onClick={button.onClick} state = {props.state} />)}
        </div>       
    );
}


export default NumberButton;