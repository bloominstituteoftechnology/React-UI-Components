import React from 'react';
import './Button.css';


const RedButtons = props =>{
    let funcs = ['÷','x','-','+','=']
    return(
        <div className='red-btns'>
        {funcs.map(func => <div className='btn func' key={func}>{func}</div> )}
        </div>
    )
}

export default RedButtons;