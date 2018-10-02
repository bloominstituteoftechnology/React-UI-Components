import React from 'react'
import './Button.css'

const ActionButton = ({ children, width = 1, color = 'white' }) => (
  <div className={`action-button width-${width} color-${color}`}>
    {children}
  </div>
)

export default ActionButton
