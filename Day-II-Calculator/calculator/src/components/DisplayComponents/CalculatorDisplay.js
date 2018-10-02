import React from 'react';
import './Display.css';

const Display = props => {
  return (
    <div className='display'><p className='output'>{props.value}</p></div>
  )
}

export default Display;
