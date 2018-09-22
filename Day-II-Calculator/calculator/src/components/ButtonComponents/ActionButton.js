import React from 'react';
import './Button.css';

// class ActionButton extends React.Component{
//     constructor(){
//         super();
        
//     }
    const ActionButton =(props)=>{
    // render(){
        return(
            <button className={props.actionClass} onClick={props.click} input={props.value}>{props.text}</button>
        );
    }
// }

export default ActionButton;