import React from 'react';
import './Display.css';

const number = '0';

const Display = props => {
  return (
    <div className='display'>
        <p className='total'>{number}</p>
    </div>
);
}

export default Display;