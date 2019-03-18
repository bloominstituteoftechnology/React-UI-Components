import React from 'react'
import './App.css'

import NumberButton from './components/ButtonComponents/NumberButton'

const App = () => {
  const text = [1, 2, 3, 4, 5, 6, 7, 8, 9, '=', '+', '-', '*', '/']
  return (
    <div className="app">
      {text.map(text => (
        <NumberButton text={text} />
      ))}
    </div>
  )
}

export default App
