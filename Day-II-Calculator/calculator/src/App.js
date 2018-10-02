import React, { Component } from 'react'
import './App.css'

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'

class App extends Component {
  state = {
    display: '0'
  }

  handleInput = input => {
    const { display } = this.state
    this.setState({ display: display === '0' ? input : display + input })
  }

  handleClear = () => {
    this.setState({ display: '0' })
  }

  handleEvaluate = () => {
    let result

    try {
      result = eval(this.state.display)
    } catch(error) {
      result = 'error'
    }

    this.setState({ display: result })
  }

  render() {
    const { handleInput, handleClear, handleEvaluate } = this
    const { display } = this.state

    return (
      <div className="calculator-container">
        <div className="row display-row">
          <CalculatorDisplay>{display}</CalculatorDisplay>
        </div>
        <div className="row">
          <ActionButton
            width="3"
            color="white"
            fontColor="grey"
            action={handleClear}
          >
            clear
          </ActionButton>
          <ActionButton action={handleInput}>÷</ActionButton>
        </div>
        {[['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+']].map(
          (row, i) => (
            <div className="row" key={i}>
              {row.map(
                (item, j, array) =>
                  j !== array.length - 1 ? (
                    <NumberButton key={j} handleInput={handleInput}>
                      {item}
                    </NumberButton>
                  ) : (
                    <ActionButton key={j} action={handleInput}>
                      {item}
                    </ActionButton>
                  )
              )}
            </div>
          )
        )}
        <div className="row">
          <NumberButton width="3" handleInput={handleInput}>
            0
          </NumberButton>
          <ActionButton action={handleEvaluate}>=</ActionButton>
        </div>
      </div>
    )
  }
}

export default App
