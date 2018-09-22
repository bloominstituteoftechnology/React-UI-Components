import React from 'react';
import './Button.css';

// class ActionButton extends React.Component{
//     constructor(){
//         super();
        
//     }
    const ActionButton =(props)=>{
    // render(){
        return(
            <button className={props.actionClass} onClick={props.click}>{props.text}</button>
        );
    }
// }

export default ActionButton;