import React from 'react';
import './Display.css';

import LargeButton from '../ButtonComponents/LargeButton'
import ActionButton from '../ButtonComponents/ActionButton'

const DisplayLineLARGE = props => {  
    const { displayProps } = props;
    return (
        <div className='line-container'>
            <LargeButton displayProps={displayProps}/>
            <ActionButton displayProps={displayProps}/>
        </div>
    )
}
export default DisplayLineLARGE; 

