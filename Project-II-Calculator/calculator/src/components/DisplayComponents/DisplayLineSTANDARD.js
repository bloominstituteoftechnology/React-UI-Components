import React from 'react';
import './Display.css';

import StandardButton from '../ButtonComponents/StandardButton'
import ActionButton from '../ButtonComponents/ActionButton'

const DisplayLineSTANDARD = props => {
    return (
        <div className='line-container'>
            <StandardButton />
            <StandardButton />
            <StandardButton />
            <ActionButton /> 
        </div>
    )
}

export default DisplayLineSTANDARD; 