import React from 'react';
import './CalcRow.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';


const CalcRow = props =>{
    return(
        <div className='calc-row'>
            {
                props.data.map((element)=>{
                    if(element.type ==='act'){
                        return(<ActionButton data={element}/>)    
                    } else 
                    {
                        return(<NumberButton data={element}/>)    
                    }
                })
            }
        </div>
    )
}

export default CalcRow;