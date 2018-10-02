import React from 'react';
import './Display.css';




const CalculatorDisplay = props =>{
    console.log('props -> ', props)
    return(
        <div className='display-div'>
            <p>{props.data}</p>
        </div>
    )
}
export default CalculatorDisplay;