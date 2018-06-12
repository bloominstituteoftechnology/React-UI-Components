import React, { Component } from 'react'
import './Display.css'

class CalculatorDisplay extends Component {
  constructor () {
    super()
    this.state = {
      display: 0
    }
  }
  render () {
    return (
      <div className='CalculatorDisplay'>
        <div className='display'> {this.state.display}</div>
      </div>
    )
  }
}

export default CalculatorDisplay
