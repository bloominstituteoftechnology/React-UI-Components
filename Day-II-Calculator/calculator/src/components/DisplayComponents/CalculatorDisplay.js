import React from 'react';
import './Display.css';


const CalculatorDisplay =(props) =>{
    return(
        <div className= 'CalcDisplay'>
        <h1>{props.num}</h1>
        </div>);


};




export default CalculatorDisplay;