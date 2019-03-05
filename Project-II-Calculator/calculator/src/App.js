import React from 'react';
import Display from './components/DisplayComponents/CalculatorDisplay'
import Button from './components/ButtonComponents/Button'
import './App.css';

let numbers = [9,8,7,6,5,4,3,2,1]
let opers = ['÷','x','-','+','=']

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      display: 0,
      num1: null,
    }
    this.store = {
      num1: null,
      num2: null,
      oper: null,
      display: 0,
    }
  }
  clearAll = () => {
    this.clear()
    this.store.display = 0
    this.setState({display: this.store.display})
  }
  clear = () => {
    this.store.num1 = null
    this.store.num2 = null
    this.store.oper = null
    this.setState({display: this.store.display})
  }
  selectNum = num => {
    if(this.store.display === 0) this.store.display = num
    else this.store.display += num.toString()
    this.setState({display: this.store.display})
  }
  selectOper = oper => {
    if(!this.store.num1) {
      this.store.num1 = this.store.display
      this.store.oper = oper
      this.store.display = ''
    }
    else {
      this.store.num2 = parseInt(this.store.display,10)
      this.eval()
    }
  }
  eval = () => {
    switch(this.store.oper) {
      case '÷': this.store.display = this.store.num1 / this.store.num2; break
      case 'x': this.store.display = this.store.num1 * this.store.num2; break
      case '-': this.store.display = this.store.num1 - this.store.num2; break
      case '+': this.store.display = this.store.num1 + this.store.num2; break
      default: this.store.display = 'oops'
    }
    this.clear()
    this.setState({display: this.store.display})
  }
  render() {
    return (
      <div className='calculator'>
        <Display value={this.state.display} />
        <Button value='clear' className='btn span3' click={this.clearAll}/>
        {opers.map((oper, i) => {return <Button value={oper} className='btn oper' click={this.selectOper} key={i}/>})}
        {numbers.map((num, i) => {return <Button value={num} className='btn num' click={this.selectNum} key={i}/>})}
        <Button value='0' className='btn num span3' click={this.selectNum}/>
      </div>
    )
  }
}

export default App;