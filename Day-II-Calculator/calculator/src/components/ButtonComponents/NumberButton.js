import React from 'react';
import './Button.css';

const NumberBtnSquare =props=> <div className={`square ${props.extraClass}`}>{props.text}</div>; 
const NumberBtnSquareContainer = props =>{
    return(
        <NumberBtnSquare extraClass={props.extraClass} text ={props.text}/>
    )
}
export default NumberBtnSquareContainer; 
