import React, { Component } from 'react'
import './App.css'
import Calculator from './components/DisplayComponents/CalculatorDisplay'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.updateDisplay = this.updateDisplay.bind(this)
  }

  updateDisplay(e) {
    console.log(e.currentTarget.textContent)
    this.setState(
      (prevState, _) => {
        e.persist()
        return {
          value: prevState.value + e.currentTarget.textContent
        }
      }
    )



    //============================
    // USE REFS, NOT E.TARGET!!!!!
    //============================




    
    //   this.setState((prevState, _) => ({
    //     value: prevState.value + e.target.textContent
    //   })
    // )
  }
  
  render() {
    return (
      <div className="app">
        <Calculator updateDisplay={this.updateDisplay}/>
      </div>
    )
  }
}
  


