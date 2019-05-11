import React from 'react';

const CalcDisplay = (props) => {
  return (
    <div className={`calcDisplay`}>
      <p>{props.text}</p>
    </div>
  )
}

export default CalcDisplay