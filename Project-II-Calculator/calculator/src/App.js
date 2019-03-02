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
      num1: null,
      num2: null,
      oper: null,
      total: '0',
    }
  }
  clear = () => {
    this.setState({
      num1: null,
      num2: null,
      oper: null,
      total: '0',
    })
  }
  selectNum = num => {
    const total = this.state.total.toString()
    if(total !== '0') this.setState({total: total.concat(num)})
    else this.setState({total: num})
  }
  selectOper = oper => {
    if(!this.state.num1) {
      this.setState({
        num1: this.state.total,
        oper: oper,
        total: '',
      })
    }
    if(this.state.num1 && this.state.oper) {
      this.setState({
        num2: this.state.total,
        total: this.eval(this.state.total)
      })
    }
  }
  eval = num2 => {
    switch(this.state.oper) {
      case '÷': return this.state.num1 / num2
      case 'x': return this.state.num1 * num2
      case '-': return this.state.num1 - num2
      case '+': return this.state.num1 + num2
    }
  }
  render() {
    return (
      <div className='calculator'>
        <Display value={this.state.total} />
        <Button value='clear' class='btn span3' click={this.clear}/>
        {opers.map((oper, i) => {return <Button value={oper} class='btn oper' click={this.selectOper} key={i}/>})}
        {numbers.map((num, i) => {return <Button value={num} class='btn num' click={this.selectNum} key={i}/>})}
        <Button value='0' class='btn num span3' click={this.selectNum}/>
      </div>
    )
  }
}

export default App;