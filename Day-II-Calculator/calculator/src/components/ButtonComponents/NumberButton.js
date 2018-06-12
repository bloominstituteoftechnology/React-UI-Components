import React from 'react'
import './Button.css'

const NumberButton = (props) => {
  return (
    <button
      className={`${props.customStyle} ${props.buttonStyle}`}
      onClick={() => props.handleSubmit}
    >
      <span className='number-text' onClick={props.handleSubmit}>
        {props.text}
      </span>
    </button>
  )
}
export default NumberButton
