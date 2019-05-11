import React from 'react';

const CalcDisplay = (props) => {
  return (
    <div className={`calcDisplay ${props.bgColor}`}>
      <p>0</p>
    </div>
  )
}

export default CalcDisplay