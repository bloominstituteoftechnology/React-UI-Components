import React from 'react'
import './Button.css'

const NumberButton = props => {
  return <button className={props.style}>{props.text}</button>
}

export default NumberButton
