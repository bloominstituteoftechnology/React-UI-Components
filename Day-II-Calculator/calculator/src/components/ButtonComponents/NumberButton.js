import React from 'react'
import './Button.css'

const NumberButton = (props) => {
  return (
    <button className={`${props.customStyle} ${props.buttonStyle}`}>
      <span className='number-text'>{props.text}</span>
    </button>
  )
}
export default NumberButton
