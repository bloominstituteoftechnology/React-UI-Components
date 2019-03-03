import React from 'react';
import './Display.css';

import LargeButton from '../ButtonComponents/LargeButton'
import ActionButton from '../ButtonComponents/ActionButton'

const DisplayLineLARGE = props => {
    return (
        <div className='line-container'>
            <LargeButton />
            <ActionButton />
        </div>
    )
}

export default DisplayLineLARGE; 