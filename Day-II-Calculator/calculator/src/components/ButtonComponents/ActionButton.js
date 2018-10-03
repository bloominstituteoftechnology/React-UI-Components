import React from 'react';
import './Button.css';


const RedButtons = props =>{
    
    return(
    
        <div className='btn func' onClick={() => props.clickHandler(props.func)}>
            {props.func}
          </div>
      
    )
}

export default RedButtons;