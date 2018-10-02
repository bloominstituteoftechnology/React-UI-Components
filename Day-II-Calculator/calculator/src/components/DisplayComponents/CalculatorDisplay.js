import React from 'react'
import './Display.css'

const CalculatorDisplay = ({ children, width, color, fontColor = 'white' }) => (
  <div className={`calulator-display width-${width} color-${color} font-color-${fontColor}`}>
    {children}
  </div>
)

export default CalculatorDisplay