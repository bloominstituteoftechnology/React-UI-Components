import React from 'react'
import './App.css'

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/ActionButton'

const App = () => (
  <div className="calculator-container">
    <div className="row">
      <CalculatorDisplay width="4" color="grey">0</CalculatorDisplay>
    </div>
    <div className="row">
      <ActionButton width="3">clear</ActionButton>
      <ActionButton color="red">÷</ActionButton>
    </div>
    <div className="row">
      <NumberButton>7</NumberButton>
      <NumberButton>8</NumberButton>
      <NumberButton>9</NumberButton>
      <ActionButton color="red">x</ActionButton>
    </div>
    <div className="row">
      <NumberButton>4</NumberButton>
      <NumberButton>5</NumberButton>
      <NumberButton>6</NumberButton>
      <ActionButton color="red">-</ActionButton>
    </div>
    <div className="row">
      <NumberButton>1</NumberButton>
      <NumberButton>2</NumberButton>
      <NumberButton>3</NumberButton>
      <ActionButton color="red">+</ActionButton>
    </div>
    <div className="row">
      <NumberButton width="3">0</NumberButton>
      <ActionButton color="red">=</ActionButton>
    </div>
  </div>
)

export default App
