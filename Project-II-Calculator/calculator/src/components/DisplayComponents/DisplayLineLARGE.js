import React from 'react';
import './Display.css';

import LargeButton from '../ButtonComponents/LargeButton'
import ActionButton from '../ButtonComponents/ActionButton'



const DisplayLineLARGE = props => {
    return (
        <div className='line-container'>
            <LargeButton buttonTextPROPS={line2_PROPS.LARGE_buttonText}/>
            <ActionButton mathButtonTextPROPS={line2_PROPS.MATH_buttonText}/>
        </div>
    )
}

export default DisplayLineLARGE; 

const line2_PROPS = {
    LARGE_buttonText: 'CLEAR',
    MATH_buttonText: '÷'
}