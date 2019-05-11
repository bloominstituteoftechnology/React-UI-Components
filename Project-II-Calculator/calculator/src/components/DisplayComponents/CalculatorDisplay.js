import React from 'react';
import './Display.css';

const CalcDisplay = (props) => {
  return (
    <div className={`calcDisplay ${props.bgColor}`}>
      <p>0</p>
    </div>
  )
}

export default CalcDisplay