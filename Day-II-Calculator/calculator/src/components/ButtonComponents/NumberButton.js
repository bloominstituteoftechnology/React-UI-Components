import React from 'react';
import './Button.css';

const NumberBtnSquare =props=> <div className={`square`}>{props.text}</div>; 
const NumberBtnSquareContainer = props =>{
    return(
        <NumberBtnSquare text ={props.text}/>
    )
}
export default NumberBtnSquareContainer; 
