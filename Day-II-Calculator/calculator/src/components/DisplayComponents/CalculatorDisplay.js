import React from 'react';
import './Display.css';

// class CalcDisplay extends React.Component{
//     constructor(){
//         super();
//     }
//     render(){
    const CalcDisplay=(props)=>{
        return(
            <div className='calc-display'>
            <div className='calc-text'>{props.display}</div>
            </div>
        );
    }
// }
export default CalcDisplay;