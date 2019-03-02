import React from 'react';
import './Display.css';

import ClearBtn from '../ButtonComponents/ClearBtn'
import StandardButton from '../ButtonComponents/Button'

const DisplayLineLARGE = props => {
    return (
        <div data-line="2">
            <ClearBtn />
            <StandardButton />
        </div>
    )
}

export default DisplayLineLARGE; 