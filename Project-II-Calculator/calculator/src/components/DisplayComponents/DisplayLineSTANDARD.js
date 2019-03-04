import React from 'react';
import './Display.css';

import StandardButton from '../ButtonComponents/StandardButton'
import ActionButton from '../ButtonComponents/ActionButton'

const DisplayLineSTANDARD = props => {
    const { displayProps } = props;
    console.log(props)


    return (
        <div className='line-container'>
            <StandardButton displayProps={displayProps.numberContent1}/>
            <StandardButton displayProps={displayProps.numberContent2}/>
            <StandardButton displayProps={displayProps.numberContent3}/>
            <ActionButton displayProps={displayProps}/> 
        </div>
    )
}

export default DisplayLineSTANDARD; 