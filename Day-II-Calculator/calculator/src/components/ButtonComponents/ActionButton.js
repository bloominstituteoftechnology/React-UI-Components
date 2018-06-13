import React from 'react'
import './Button.css'

const ActionButton = (props) => {
  return (
    <button
      className={`general-styles ${props.buttonStyle}`}
      onClick={props.onClick}
    >
      <div className='clear-text'>{props.text}</div>
    </button>
  )
}

export default ActionButton
