import React from 'react'
import './App.css'
import NumberButton from './components/ButtonComponents/NumberButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'

const App = () => {
  return (
    <div className='container'>
      <CalculatorDisplay />
      <ActionButton text='clear' buttonStyle='clear' />
      <NumberButton
        text='&#247;'
        buttonStyle='red-style'
        customStyle='operations'
      />
      <NumberButton text='7' buttonStyle='number-btn' />
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

export default App
