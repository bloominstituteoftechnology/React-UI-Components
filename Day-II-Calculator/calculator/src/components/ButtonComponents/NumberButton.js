import React from 'react'
import './Button.css'

const NumberButton = ({ children, width = 1, color = 'white' }) => (
  <div className={`action-button width-${width} color-${color}`}>
    {children}
  </div>
)

export default NumberButton
