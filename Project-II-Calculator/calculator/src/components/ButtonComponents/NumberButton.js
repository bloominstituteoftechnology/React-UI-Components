import React from 'react';

const NumberButton = (props) => {
  return (
    <div className={`btn btn-small ${props.bgColor}`}>
      <p>{props.text}</p>
    </div>
  )
}

export default NumberButton