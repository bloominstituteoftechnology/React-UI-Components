import React from 'react';
import './Button.css';
let funcs = ['÷','x','-','+','=']

const RedButtons = props =>{
    
    return(
        <div className='red-btns'>
        {funcs.map(func => <div className='btn func' key={func}>{func}</div> )}
        </div>
    )
}

export default RedButtons;