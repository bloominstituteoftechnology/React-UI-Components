import React from 'react';
import './Display.css';

const Display = props => (
    <div className='display'>
        <pre>{props.value}</pre>
    </div>
)

export default Display