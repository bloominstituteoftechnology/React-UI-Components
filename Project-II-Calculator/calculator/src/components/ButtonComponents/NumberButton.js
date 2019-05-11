import React from 'react';

const NumberButton = (props) => {
  return (
    <div className={`btn-small ${props.bgColor}`}>
      {props.text}
    </div>
  )
}

export default NumberButton