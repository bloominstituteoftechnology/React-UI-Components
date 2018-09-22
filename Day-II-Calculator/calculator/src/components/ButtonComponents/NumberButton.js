import React from 'react';
import './Button.css';

// class NumberButton extends React.Component{
//     constructor(){
//         super();
//     }
const NumberButton=(props)=>{
    return(
        <button className={props.class} onclick={props.click}>{props.text}</button>
    )

}
export default NumberButton;