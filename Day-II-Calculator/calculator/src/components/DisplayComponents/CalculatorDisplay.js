import React, { Component } from 'react'
import './Display.css'
import NumberButton from '../ButtonComponents/NumberButton'
import ActionButton from '../ButtonComponents/ActionButton'
class CalculatorDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      display: '0',
      operator: null
    }
  }
  clear = () => {
    this.setState({ display: '0' })
  }
  submitNum = (num) => {
    const { display } = this.state
    this.setState({ display: display === '0' ? num : this.state.display + num })
    console.log(num)
  }
  addNum = (operator) => {
    this.setState({ operator: operator })
    console.log(operator)
  }
  equals = () => {}

  render () {
    return (
      <div className='container'>
        <div className='CalculatorDisplay'>
          <div className='display'> {this.state.display}</div>
        </div>
        <ActionButton
          text='clear'
          buttonStyle='clear'
          onClick={() => this.clear()}
        />
        <NumberButton
          text='&#247;'
          buttonStyle='red-style'
          customStyle='operations'
        />
        <NumberButton
          text='7'
          buttonStyle='number-btn'
          onClick={() => this.submitNum('7')}
        />
        <NumberButton
          text='8'
          buttonStyle='number-btn'
          onClick={() => this.submitNum('8')}
        />
        <NumberButton
          text='9'
          buttonStyle='number-btn'
          onClick={() => this.submitNum('9')}
        />
        <NumberButton
          text='&#215;'
          buttonStyle='red-style'
          customStyle='operations'
        />
        <NumberButton
          text='4'
          buttonStyle='number-btn'
          onClick={() => this.submitNum('4')}
        />
        <NumberButton
          text='5'
          buttonStyle='number-btn'
          onClick={() => this.submitNum('5')}
        />
        <NumberButton
          text='6'
          buttonStyle='number-btn'
          onClick={() => this.submitNum('6')}
        />
        <NumberButton
          text='&#8722;'
          buttonStyle='red-style'
          customStyle='operations'
        />
        <NumberButton
          text='1'
          buttonStyle='number-btn'
          onClick={() => this.submitNum('1')}
        />
        <NumberButton
          text='2'
          buttonStyle='number-btn'
          onClick={() => this.submitNum('2')}
        />
        <NumberButton
          text='3'
          buttonStyle='number-btn'
          onClick={() => this.submitNum('3')}
        />
        <NumberButton
          text='&#43;'
          buttonStyle='red-style'
          customStyle='operations'
          onClick={() => this.addNum('+')}
        />
        <ActionButton text='0' buttonStyle='clear' />
        <NumberButton
          text='&#61;'
          buttonStyle='red-style'
          customStyle='operations'
          onClick={() => this.equals()}
        />
      </div>
    )
  }
}

export default CalculatorDisplay
