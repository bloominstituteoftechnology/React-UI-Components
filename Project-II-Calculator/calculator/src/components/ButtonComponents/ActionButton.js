import React from 'react';
import Button from './Button'
import './Button.css';


function ActionButton(props){
    return(
        <div className="numbers">
            {props.buttons.filter(item=>item.type==="action").map( button => < Button item = {button} key={button.id} />)}
        </div>       
    );
}

export default ActionButton