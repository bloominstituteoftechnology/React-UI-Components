import React from 'react'
import './App.css'

import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  const button = [
    [<i class="fas fa-divide" />, 'symbol'],
    [7, 'number'],
    [8, 'number'],
    [9, 'number'],
    [<i class="fas fa-times" />, 'symbol'],
    [4, 'number'],
    [5, 'number'],
    [6, 'number'],
    [<i class="fas fa-minus" />, 'symbol'],
    [1, 'number'],
    [2, 'number'],
    [3, 'number'],
    [<i class="fas fa-plus" />, 'symbol'],
    [<i class="fas fa-equals" />, 'symbol']
  ]

  return (
    <div className="app">
      {button.map(btn => (
        <NumberButton text={btn[0]} style={btn[1]} />
      ))}
      <ActionButton />
      <CalculatorDisplay />
    </div>
  )
}

export default App
