import React from 'react'
import './Display.css'

const CalculatorDisplay = ({ children, width, color }) => (
  <div className={`calulator-display width-${width} color-${color}`}>
    {children}
  </div>
)

export default CalculatorDisplay