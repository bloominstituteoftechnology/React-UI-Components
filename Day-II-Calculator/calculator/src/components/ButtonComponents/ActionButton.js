import React from 'react'
import './Button.css'

const ActionButton = ({ children, width = 1, color = 'white', fontColor = 'grey' }) => (
  <div className={`action-button width-${width} color-${color} font-color-${fontColor}`}>
    {children}
  </div>
)

export default ActionButton
