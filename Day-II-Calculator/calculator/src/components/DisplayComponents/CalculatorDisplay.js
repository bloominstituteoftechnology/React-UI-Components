import React from 'react';
import './Display.css';
 


//class CalculatorDisplay extends React.Component{

    
    const CalculatorDisplay =(props)=>{
    return(
        <div>{props.initialValue}</div>
    );
}


export default CalculatorDisplay;