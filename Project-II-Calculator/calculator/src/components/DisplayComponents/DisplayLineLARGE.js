import React from 'react';
import './Display.css';

import LargeButton from '../ButtonComponents/LargeButton'
import ActionButton from '../ButtonComponents/ActionButton'

const DisplayLineLARGE = props => {
    // This is called destructuring, it we do this. then we don't access line1 like props.line1, instead directly access line1
    const { displayProps } = props;  

    return (
        <div className='line-container'>
            <LargeButton passedPROPS={displayProps}/>
            <ActionButton passedPROPS={displayProps}/>
        </div>
    )
}


export default DisplayLineLARGE; 

