import React, { Component } from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, replaceVal: 1 }
    console.log(this)
  }

  clearClick = () => {
    this.setState({
      value: 0,
      replaceVal: 1
    });
  }

  numClick = (e) => {
    if (this.state.replaceVal) {
      this.setState({
        value: e.target.innerText
      })
      this.setState({ replaceVal: 0 });
    }
    else {
      this.setState({
        value: this.state.value + e.target.innerText
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.numClick} />
        <div>
          <CalculatorDisplay name={this.state.value} />
        </div>
        <div>
          <ActionButton name='clear' handleClick={this.clearClick} bgcolor='white bigger clear' />
          <ActionButton name='/' bgcolor='red' />
        </div>
        <div>
          <NumberButton name='7' handleClick={this.numClick} bgcolor='white' />
          <NumberButton name='8' handleClick={this.numClick} bgcolor='white' />
          <NumberButton name='9' handleClick={this.numClick} bgcolor='white' />
          <ActionButton name='X' bgcolor='red' />

        </div>
        <div>
          <NumberButton name='4' handleClick={this.numClick} bgcolor='white' />
          <NumberButton name='5' handleClick={this.numClick} bgcolor='white' />
          <NumberButton name='6' handleClick={this.numClick} bgcolor='white' />
          <ActionButton name='-' bgcolor='red' />
        </div>
        <div>
          <NumberButton name='1' handleClick={this.numClick} bgcolor='white' />
          <NumberButton name='2' handleClick={this.numClick} bgcolor='white' />
          <NumberButton name='3' handleClick={this.numClick} bgcolor='white' />
          <ActionButton name='-' bgcolor='red' />
        </div>
        <div>
          <NumberButton name='0' handleClick={this.numClick} bgcolor='white bigger' className='bigger' />
          <ActionButton name='=' bgcolor='red' />
        </div>
      </div>

    );
  };
}

export default App;
