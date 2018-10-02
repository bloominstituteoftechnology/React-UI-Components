import React from 'react'
import './Display.css'

const CalculatorDisplay = ({ children, width= "4", color = "grey", fontColor = 'white' }) => (
  <div className={`calulator-display width-${width} color-${color} font-color-${fontColor}`}>
    {children}
  </div>
)

export default CalculatorDisplay