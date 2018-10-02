import React from 'react';
import './Display.css';

const Display = props => {
  return (
    <div className='display'><p className='output'>{props.text}</p></div>
  )
}

export default Display; 
