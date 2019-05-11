import React from 'react';

const ActionButton = (props) => {
  return (
    <div className={`btn btn-large ${props.bgColor}`}>
      <p>{props.text}</p>
    </div>
  )
}

export default ActionButton