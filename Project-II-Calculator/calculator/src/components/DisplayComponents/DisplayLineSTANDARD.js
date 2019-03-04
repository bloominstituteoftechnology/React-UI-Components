import React from 'react';
import './Display.css';

import StandardButton from '../ButtonComponents/StandardButton'
import ActionButton from '../ButtonComponents/ActionButton'

const DisplayLineSTANDARD = props => {
    const { displayProps } = props;
    // console.log(props)

    return (
        <div className='line-container'>
            <StandardButton displayProps={displayProps}/>
            <StandardButton displayProps={displayProps}/>
            <StandardButton displayProps={displayProps}/>
            <ActionButton displayProps={displayProps}/> 
        </div>
    )
}

export default DisplayLineSTANDARD; 