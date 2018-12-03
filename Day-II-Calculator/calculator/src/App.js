import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      previousNum: 0,
      operator: ""
    }

  }

  clearDisplay = () => {
    this.setState({ display: 0 });
  }
  
  nineDisplay = () => {
    this.setState({ display: this.state.display * 10 + 9});
  }
  
  eightDisplay = () => {
    this.setState({ display: this.state.display * 10 + 8});
  }
  
  sevenDisplay = () => {
    this.setState({ display: this.state.display * 10 + 7});
  }
  
  sixDisplay = () => {
    this.setState({ display: this.state.display * 10 + 6});
  }
  
  fiveDisplay = () => {
    this.setState({ display: this.state.display * 10 + 5});
  }
  
  fourDisplay = () => {
    this.setState({ display: this.state.display * 10 + 4});
  }
  
  threeDisplay = () => {
    this.setState({ display: this.state.display * 10 + 3});
  }
  
  twoDisplay = () => {
    this.setState({ display: this.state.display * 10 + 2});
  }
  
  oneDisplay = () => {
    this.setState({ display: this.state.display * 10 + 1});
  }
  
  zeroDisplay = () => {
    this.setState({ display: this.state.display * 10 + 0});
  }
  plus = () => {
    this.setState({ oldNum: this.state.oldNum + this.state.total, total: 0, operator: '+' })
  }
  
  minus = () => {
    this.setState({ oldNum: this.state.oldNum === 0 ? this.state.total : this.state.oldNum - this.state.total, total: 0, operator: '-' })
  }
  
  multiply = () => {
    this.setState({ oldNum: this.state.oldNum === 0 ? this.state.total : this.state.oldNum * this.state.total, total: 0, operator: '*' })
  }
  
  divide = () => {
    this.setState({ oldNum: this.state.oldNum === 0 ? this.state.total : this.state.oldNum / this.state.total, total: 0, operator: '/' })
  }
  
  equal = () => {
    if (this.state.operator === "+") {
      this.setState({ total: this.state.oldNum + this.state.total, oldNum: 0 })
    }
    if (this.state.operator === "-") {
      this.setState({ total: this.state.oldNum - this.state.total, oldNum: 0 })
    }
    if (this.state.operator === "*") {
      this.setState({ total: this.state.oldNum * this.state.total, oldNum: 0 })
    }
    if (this.state.operator === "/") {
      this.setState({ total: (this.state.oldNum / this.state.total).toFixed(1), oldNum: 0 })
    }
  }

  render() {
    return (
      <div className="container">
       <CalculatorDisplay display={this.state.display} />
        <div className="row">
          <ActionButton text="clear" func={this.clearDisplay} />
          <NumberButton text="/" style="sign" func={this.divide} />
        </div>
        <div className="row">
          <NumberButton text="7" style="num" func={this.sevenDisplay} />
          <NumberButton text="8" style="num" func={this.eightDisplay} />
          <NumberButton text="9" style="num" func={this.nineDisplay} />
          <NumberButton text="×" style="sign" func={this.multiply} />
        </div>
        <div className="row">
          <NumberButton text="4" style="num" func={this.fourDisplay} />
          <NumberButton text="5" style="num" func={this.fiveDisplay} />
          <NumberButton text="6" style="num" func={this.sixDisplay} />
          <NumberButton text="-" style="sign" func={this.minus} />
        </div>
        <div className="row">
          <NumberButton text="1" style="num" func={this.oneDisplay} />
          <NumberButton text="2" style="num" func={this.twoDisplay} />
          <NumberButton text="3" style="num" func={this.threeDisplay} />
          <NumberButton text="+" style="sign" func={this.plus} />
        </div>
        <div className="row">
          <ActionButton text="0" func={this.zeroDisplay} />
          <NumberButton text="=" style="sign" func={this.equal} />
        </div>
      </div>
    )
  }
}

export default App;

