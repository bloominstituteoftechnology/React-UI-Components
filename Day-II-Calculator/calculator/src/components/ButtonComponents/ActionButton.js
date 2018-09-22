import React from 'react'
import './Button.css'

// make the clear button font-weight light
const fontWeight = val => {
  return !isNaN(val) || val === 'Clear'
}

export const ActionButton = props => (
  <div
    className={`clear-button ${fontWeight(props.children) ? null : 'no-bold'}`}
    onClick={props.handleClear}
  >
    {props.children}
  </div>
)
