import React from 'react'
import './Button.css'

const NumberButton = ({
  children,
  width = 1,
  color = 'white',
  fontColor = 'grey',
  handleInput
}) => (
  <div
    className={`number-button width-${width} color-${color} font-color-${fontColor}`}
    onClick={() => handleInput(children)}
  >
    {children}
  </div>
)

export default NumberButton
