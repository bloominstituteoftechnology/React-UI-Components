import React, { Component } from 'react'
import './Display.css'
import NumberButton from '../ButtonComponents/NumberButton'
import ActionButton from '../ButtonComponents/ActionButton'
class CalculatorDisplay extends Component {
  constructor () {
    super()
    this.state = {
      display: '0'
    }
  }
  handleSubmit (num) {
    console.log('in here')
    // const { display } = this.state
    this.setState({ display: this.state.display + num })
  }

  render () {
    return (
      <div className='container'>
        <div className='CalculatorDisplay'>
          <div className='display'> {this.state.display}</div>
        </div>
        <ActionButton text='clear' buttonStyle='clear' />
        <NumberButton
          text='&#247;'
          buttonStyle='red-style'
          customStyle='operations'
        />
        <NumberButton
          text='7'
          buttonStyle='number-btn'
          onClick={() => this.handleSubmit('7')}
        />
        <NumberButton text='8' buttonStyle='number-btn' />
        <NumberButton text='9' buttonStyle='number-btn' />
        <NumberButton
          text='&#215;'
          buttonStyle='red-style'
          customStyle='operations'
        />
        <NumberButton text='4' buttonStyle='number-btn' />
        <NumberButton text='5' buttonStyle='number-btn' />
        <NumberButton text='6' buttonStyle='number-btn' />
        <NumberButton
          text='&#8722;'
          buttonStyle='red-style'
          customStyle='operations'
        />
        <NumberButton text='1' buttonStyle='number-btn' />
        <NumberButton text='2' buttonStyle='number-btn' />
        <NumberButton text='3' buttonStyle='number-btn' />
        <NumberButton
          text='&#43;'
          buttonStyle='red-style'
          customStyle='operations'
        />
        <ActionButton text='0' buttonStyle='clear' />
        <NumberButton
          text='&#61;'
          buttonStyle='red-style'
          customStyle='operations'
        />
      </div>
    )
  }
}

export default CalculatorDisplay
